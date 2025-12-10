import { defineField, defineType } from 'sanity'

export const projectGallery = defineType({
  name: 'projectGallery',
  title: '项目展示 (Project Gallery)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '项目标题 (Project Title)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '链接标识 (Slug)',
      description: '点击 Generate 按钮根据标题自动生成',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '项目描述 (Description)',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: '日期/年份 (Date / Year)',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: '图集 (Gallery Images)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
})
