import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      title: 'Video URL',
      type: "file",
      options: {
        hotspot: true,
      }
    })
    
  ],
})
