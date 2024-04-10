import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'price',
  title: 'Price',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Package ID',
      type: "number",
    }),
    defineField({
      name: 'titleEn',
      title: 'Title package in English',
      type: 'string',
    }),
    defineField({
      name: 'titleUa',
      title: 'Title package in Ukrainian',
      type: 'string',
    }),
    defineField({
      name: 'USD',
      title: 'Price of package in USD',
      type: 'number',
    }),
    defineField({
      name: 'EUR',
      title: 'Price of package in EUR',
      type: 'number',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description of package in English',
      type: 'string',
    }),
    defineField({
      name: 'descriptionUa',
      title: 'Description of package in Ukrainian',
      type: 'string',
    }),
  ],
})
