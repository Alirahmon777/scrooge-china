import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/site.config';
import { SeoProps } from '@/types/interfaces';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Seo: React.FC<SeoProps> = ({
  children,
  metaTitle = siteConfig.metaData.title,
  metaDescription = siteConfig.metaData.description,
  metaKeyword = siteConfig.metaData.keyword,
  ogImage = siteConfig.metaData.ogImage,
  ogType = siteConfig.metaData.ogType,
  faviconPath = siteConfig.faviconPath,
  locale = siteConfig.metaData.locale,
  alternates,
  hasChat,
}) => {
  const {
    i18n: { language: lng },
  } = useTranslation();
  const { pathname } = useLocation();
  const origin = window.location.origin;

  const iconSizes = ['57x57', '60x60', '72x72', '76x76', '114x114', '120x120', '144x144', '152x152', '180x180'];

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: lng, 'xml:lang': lng, prefix: 'og: https://ogp.me/ns#' }}
        defaultTitle='Scrooge China - Быстрое пополнение сайта Buff.163'
        prioritizeSeoTags={true}
      >
        <link rel='canonical' href={`${origin}${pathname}`} />
        {alternates &&
          alternates.map(({ href, hrefLang }, idx) => (
            <link rel='alternate' href={`${origin}${href}`} hrefLang={hrefLang} key={idx} />
          ))}
        <title>{metaTitle}</title>
        {/* apple touch icon */}

        {iconSizes.map((size, idx) => (
          <React.Fragment key={idx}>
            <link
              rel='apple-touch-icon-precomposed'
              sizes={size}
              href={`/${faviconPath}/apple-touch-icon-${size}-precomposed.png`}
            />
            <link rel='apple-touch-icon' sizes={size} href={`/${faviconPath}/apple-touch-icon-${size}.png`} />
          </React.Fragment>
        ))}

        {/* icon  */}
        <link rel='apple-touch-icon' sizes='180x180' href={`/${faviconPath}/apple-touch-icon.png`} />
        <link rel='icon' type='image/png' sizes='32x32' href={`/${faviconPath}/favicon-32x32.png`} />
        <link rel='icon' type='image/png' sizes='16x16' href={`/${faviconPath}/favicon-16x16.png`} />
        <link rel='manifest' href={`/${faviconPath}/site.webmanifest`} />
        <link rel='mask-icon' href={`/${faviconPath}/safari-pinned-tab.svg`} color='#53ab77' />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta name='msapplication-TileImage' content={`/${faviconPath}/mstile-144x144.png`} />

        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='keyword' content={metaKeyword} />
        <meta name='author' content={siteConfig.metaData.author} />
        <meta name='description' content={metaDescription} />

        <meta property='og:title' name='og:title' content={metaTitle} />
        <meta property='og:description' name='og:description' content={metaDescription} />
        <meta property='og:image' name='og:image' content={ogImage} />
        <meta property='og:locale' name='og:locale' content={locale} />
        <meta property='og:locale:alternate' name='og:locale:alternate' content={'ru_RU'} />
        <meta property='og:locale:alternate' name='og:locale:alternate' content={'en_US'} />
        <meta property='og:type' name='og:type' content={ogType} />
        <meta property='og:site_name' name='og:site_name' content={metaTitle} />
        <meta property='og:url' name='og:url' content={`${origin}${pathname}`} />

        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={metaDescription} />

        {hasChat && <script src='//code.jivosite.com/widget/0GbKOqyDNC' async></script>}
      </Helmet>
      <>{children}</>
    </>
  );
};

export default Seo;
