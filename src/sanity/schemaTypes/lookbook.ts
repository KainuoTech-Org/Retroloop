import { defineField, defineType } from 'sanity'

export const lookbook = defineType({
  name: 'lookbook',
  title: '造型录 (Lookbook)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '造型名称 (Title)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: '类型 (Type)',
      type: 'string',
      options: {
        list: [
          { title: '图片 (Image)', value: 'image' },
          { title: '文字海报 (Text Poster)', value: 'text' },
        ],
      },
      initialValue: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: '图片 (Image)',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => document?.type === 'text',
    }),
    defineField({
      name: 'textContent',
      title: '海报文字 (Text Content)',
      type: 'string',
      hidden: ({ document }) => document?.type === 'image',
    }),
    defineField({
      name: 'aspect',
      title: '图片比例 (Aspect Ratio)',
      type: 'string',
      options: {
        list: [
          { title: '3:4 (Portrait)', value: 'aspect-[3/4]' },
          { title: '4:5 (Instagram)', value: 'aspect-[4/5]' },
          { title: '16:9 (Landscape)', value: 'aspect-[16/9]' },
          { title: '1:1 (Square)', value: 'aspect-square' },
        ],
      },
      initialValue: 'aspect-[3/4]',
    }),
  ],
})
