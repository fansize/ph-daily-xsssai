import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://elegantjewelrys.shop'

    const routes = [
        '',
        '/zh/posts',
        '/en/posts',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly', // 改为更频繁的更新
        priority: route === '' ? 1 : 0.8,
    }))
}
