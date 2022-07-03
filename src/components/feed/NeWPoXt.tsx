import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Modal from '@mui/material/Modal'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { config } from 'config'
import React, { useEffect, useRef, useState } from 'react'

export const NeWPoXt = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  }

  const [command, setCommand] = useState<string>(`
	const mongoose = require('mongoose');
	try {const postSchema = new mongoose.Schema({image: String, owner: String, comment: String}, {timestamps: true}); mongoose.model('posts', postSchema);} catch(error) {}
	const Post = mongoose.model('posts');
	(async() => {try {const post = new Post({image: '#image', owner: 'hacker', comment: '#comment'}); await post.save(); res.send(post);} catch(error) {res.status(200).send({error: error.message})}})()
	`)

  const [open, setOpen] = useState(false)
  const [orgImage, setOrgImage] = useState('')
  const [orgFile, setOrgFile] = useState('')
  const [editedImage, setEditedImage] = useState('')
  const [faces, setFaces] = useState<
    {
      x: Number
      y: Number
      w: Number
      h: Number
    }[]
  >()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [selectedFace, setSelectedFace] = useState(-1)
  const [selectedTemplate, setSelectedTemplate] = useState(-1)
  const [loading, setLoading] = useState(false)
  const [comment, setComment] = useState('')

  const handleOnChange = async (e) => {
    if (loading) return
    setLoading(true)
    if (e.target.files && e.target.files[0]) {
      setOrgImage(URL.createObjectURL(e.target.files[0]))
      const file = e.target.files[0]
      setOrgFile(file)
      const formData = new FormData()

      if (editedImage) {
        formData.append('faceSelected', selectedFace.toString())
        formData.append('template', selectedTemplate.toString())
      }
      formData.append('image', file)

      try {
        const res = await axios('http://103.169.67.41:3333/api/preprocess', {
          method: 'POST',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        if (res.data?.image) {
          const bytestring = res.data.image
          const image = bytestring.split("'")[1]
          setEditedImage('data:image/jpeg;base64,' + image || orgImage)
        }

        if (res.data?.faces.length) {
          const imgSize = res.data?.size
          const { h, w } = imgSize
          // drawRect({ x: 1997, y: 20, w: 50, h: 60 })
          setFaces(
            res.data?.faces.map((e) => {
              return { x: (e[0] / w) * 800, y: (e[1] / h) * 600, w: (e[2] / w) * 800, h: (e[3] / h) * 600 }
              // drawRect()
            }),
          )

          console.log('เย่')
        }
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    // fetch(`${API_URL}/image-upload`, {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((images) => {
    //     this.setState({
    //       uploading: false,
    //       images,
    //     })
    //   })
  }

  const handlerApply = async () => {
    if (loading) return

    setLoading(true)
    const formData = new FormData()
    const file = orgFile

    if (editedImage) {
      formData.append('faceSelected', selectedFace.toString())
      formData.append('template', selectedTemplate.toString())
    }
    formData.append('image', file)

    try {
      const res = await axios('http://103.169.67.41:3333/api/preprocess', {
        method: 'POST',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      if (res.data?.image) {
        const bytestring = res.data.image
        const image = bytestring.split("'")[1]
        setEditedImage('data:image/jpeg;base64,' + image || orgImage)
      }

      if (res.data?.faces.length) {
        const imgSize = res.data?.size
        const { h, w } = imgSize
        // drawRect({ x: 1997, y: 20, w: 50, h: 60 })
        setFaces(
          res.data?.faces.map((e) => {
            return { x: (e[0] / w) * 800, y: (e[1] / h) * 600, w: (e[2] / w) * 800, h: (e[3] / h) * 600 }
            // drawRect()
          }),
        )

        console.log('เย่')
      }
    } catch (e) {
      console.log(e)
    }

    setLoading(false)
  }

  const handlerSave = async () => {
    if (loading) return
    setLoading(true)

    try {
      const res = await axios(config.ENDPOINT || '', {
        method: 'POST',
        data: {
          command: command.replace('#comment', comment).replace('#image', editedImage),
        },
        headers: {
          X_API_KEY: config.X_API_KEY || '',
        },
      })

      console.log(res.data)
    } catch (e) {
      console.log(e)
    }

    setLoading(false)
  }

  useEffect(() => {
    console.log(faces)
  }, [faces])

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null)

  const drawRect = (info) => {
    const { x, y, w, h } = info

    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d')
      const ctx = canvasCtxRef.current
      ctx!.beginPath()
      ctx!.strokeStyle = 'red'
      ctx!.lineWidth = 2
      ctx!.rect(x, y, w, h)
      ctx!.stroke()
    }
  }

  useEffect(() => {
    // const r1Info = { x: 20, y: 30, w: 100, h: 50 }
    // drawRect(r1Info)
  }, [])

  const templates = [
    'replaceAllFace',
    'shuffleAllFace',
    'replaceAllFaceWithOriginalPhoto',
    'replaceAllFaceWithSelectedPhoto',
    'blurImage',
    'blurAllFace',
  ]

  return (
    <Box style={{ display: 'flex', padding: '20px', justifyContent: 'center' }}>
      <Button onClick={handleOpen} variant="contained">
        Need r new post bro ?
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input type="file" placeholder="." accept=".jpeg, .jpg, .png" onChange={(e) => handleOnChange(e)} />
              {/* <canvas
                ref={canvasRef}
                style={{
                  marginTop: '22px',
                  position: 'absolute',
                  // backgroundColor: 'red',
                }}
                width="800px"
                height="600px"
              ></canvas> */}
              <div style={{ width: '800px', height: '600px', position: 'absolute', marginTop: '22px' }}>
                {faces &&
                  faces.map((e, idx) => (
                    <div
                      style={{
                        position: 'absolute',
                        left: `${e.x}px`,
                        top: `${e.y}px`,
                        width: `${e.w}px`,
                        height: `${e.h}px`,
                        border: '2px solid pink',
                        // backgroundColor: 'red',
                        display: 'inline-block',
                        cursor: 'pointer',
                      }}
                      key={idx}
                      onClick={() => {
                        setSelectedFace(idx)
                      }}
                    />
                  ))}
              </div>
              <div>
                <img src={editedImage || orgImage} alt="" style={{ width: '800px', height: '600px' }} />
              </div>
            </div>
            <Box style={{ width: '100%', padding: '8px', display: 'flex', flexDirection: 'column' }}>
              <FormControl>
                <FormLabel id="template">Template</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="template"
                  name="template"
                  onChange={(e) => setSelectedTemplate(parseInt(e.target.value))}
                >
                  {templates.map((e, idx) => (
                    <FormControlLabel value={idx} control={<Radio />} label={e} key={idx} />
                  ))}
                </RadioGroup>
              </FormControl>
              <p>
                Face Selected: <span>{selectedFace.toString()}</span>
              </p>
              <Button
                onClick={() => {
                  handlerApply()
                }}
              >
                Apply
              </Button>
              <p>Comment</p>
              <textarea
                placeholder="."
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value)
                }}
              />
              <Button
                onClick={() => {
                  handlerSave()
                }}
              >
                Save
              </Button>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}
