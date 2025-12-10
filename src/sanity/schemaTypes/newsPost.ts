import { defineField, defineType } from 'sanity'

export const newsPost = defineType({
  name: 'newsPost',
  title: '新闻动态 (News Post)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '标题 (Title)',
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
      name: 'publishedAt',
      title: '发布时间 (Published at)',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'mainImage',
      title: '封面图片 (Main image)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: '正文内容 (Body)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
