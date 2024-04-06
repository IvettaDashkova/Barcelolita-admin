import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Shooting ID',
      type: "number",
    }),
    defineField({
      name: 'nameEn',
      title: 'Shooting Type in English',
      type: 'string',
      validation: Rule => Rule.max(20).warning(`A Shooting Type shouldn't be more than 20 characters.`)
    }),
    defineField({
      name: 'nameUa',
      title: 'Shooting Type in Ukrainian',
      type: 'string',
      validation: Rule => Rule.max(20).warning(`A Shooting Type shouldn't be more than 20 characters.`)
    }),
    defineField({
      name: 'imgURL',
      title: 'Shooting Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Shooting Description in English',
      type: 'string',
      validation: Rule => Rule.max(100).warning(`A Shooting Description shouldn't be more than 100 characters.`)
    }),
    defineField({
      name: 'descriptionUa',
      title: 'Shooting Description in Ukrainian',
      type: 'string',
      validation: Rule => Rule.max(100).warning(`A Shooting Description shouldn't be more than 100 characters.`)
    }),

    defineField({
      name: 'img',
      title: 'List Images',
      type: 'array',
      of: [
        {
          title: 'Shooting Image',
          type: 'image',
          options: {
            hotspot: true,
          }
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

