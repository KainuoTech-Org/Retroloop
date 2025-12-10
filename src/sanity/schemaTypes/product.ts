import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: '商品 (Product)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '商品名称 (Name)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '链接标识 (Slug)',
      description: '点击 Generate 按钮根据名称自动生成',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: '品牌 (Brand)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: '价格 (Price)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: '尺码 (Size)',
      type: 'string',
    }),
    defineField({
      name: 'grade',
      title: '成色等级 (Grade)',
      type: 'string',
      options: {
        list: [
          { title: 'S - 全新/近全新 (Mint)', value: 'S' },
          { title: 'A - 轻微使用痕迹 (Excellent)', value: 'A' },
          { title: 'B - 正常使用痕迹 (Good)', value: 'B' },
          { title: 'C - 明显使用痕迹 (Fair)', value: 'C' },
          { title: 'D - 瑕疵/破坏风格 (Distressed)', value: 'D' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: '分类 (Category)',
      type: 'string',
      options: {
        list: [
          { title: '上装 (Tops)', value: 'Tops' },
          { title: '外套 (Outerwear)', value: 'Outerwear' },
          { title: '下装 (Bottoms)', value: 'Bottoms' },
          { title: '配饰 (Accessories)', value: 'Accessories' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: '商品图片 (Image)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '商品描述 (Description)',
      type: 'text',
    }),
  ],
})
