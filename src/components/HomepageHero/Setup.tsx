import styles from '@/components/HomepageHero/SetupHero.module.scss'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { LinkPreview } from '@/components/ui/link-preview'
import { useLocale } from '@/hooks'
import Link from 'next/link'

const STRINGS = {
  GITHUB_REPO: 'https://github.com/pdsuwwz/nextjs-nextra-starter',
  LINKS: {
    NEXTJS: 'https://nextjs.org',
    TAILWIND: 'https://tailwindcss.com',
    SHADCN: 'https://ui.shadcn.com',
    ACETERNITY: 'https://ui.aceternity.com',
    GITHUB: 'https://github.com/fansize/ph-daily-xsssai',
  },
  FLIP_WORDS: [
    '精选',
    '新颖',
    '高效',
    '实用',
    '创新',
    '优质',
    '热门',
    '趋势',
    '必备',
  ],
  LABELS: {
    NEXTRA: 'Product',
    STARTER: 'Hunter',
    TEMPLATE: 'Daily',
    TEMPLATE_MADE: '发现',
    WITH: '基于',
    GET_STARTED: '开始探索',
    GITHUB: '查看源码',
  },
}

export function SetupHero() {
  const { t, currentLocale } = useLocale()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          <a
            className={styles.badge}
            href={STRINGS.GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('badgeTitle')}
          </a>
        </div>
        <h1 className={styles.headline}>
          <MotionWrapperFlash className="flex items-center">
            <span className="icon-[emojione-v1--lightning-mood]"></span>
          </MotionWrapperFlash>
          {' '}
          {STRINGS.LABELS.NEXTRA}
          {' '}
          <br className="sm:hidden"></br>
          {' '}
          {STRINGS.LABELS.STARTER}
          <br className="sm:hidden"></br>
          {' '}
          {STRINGS.LABELS.TEMPLATE}
        </h1>
        <div className={styles.subtitle}>
          {STRINGS.LABELS.TEMPLATE_MADE}
          {' '}
          <FlipWords words={STRINGS.FLIP_WORDS} />
          <br />
          {STRINGS.LABELS.WITH}
          {' '}
          <LinkPreview url={STRINGS.LINKS.NEXTJS}>Next.js</LinkPreview>
          ,
          {' '}
          <LinkPreview url={STRINGS.LINKS.TAILWIND}>Tailwind CSS</LinkPreview>
          , and
          {' '}
          <LinkPreview url={STRINGS.LINKS.SHADCN}>Shadcn UI</LinkPreview>
        </div>
        <div className="flex justify-center pt-10">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link href={`/${currentLocale}/posts/2025-01-01`}>
                {STRINGS.LABELS.GET_STARTED}
                <span className="w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]"></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link href={STRINGS.LINKS.GITHUB} target="_blank">
                {STRINGS.LABELS.GITHUB}
                <span className="ml-[6px] icon-[mingcute--github-line]"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
