import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/site.config';
import { SeoProps } from '@/types/interfaces';
import { useTranslation } from 'react-i18next';

const Seo: React.FC<SeoProps> = ({
  children,
  metaTitle = siteConfig.metaData.title,
  metaDescription = siteConfig.metaData.description,
  metaKeyword = siteConfig.metaData.keyword,
  ogImage = siteConfig.metaData.ogImage,
  ogType = siteConfig.metaData.ogType,
  ogSiteName = siteConfig.metaData.ogSiteName,
  home = siteConfig.route,
  favicon = siteConfig.favicon,
  locale = siteConfig.metaData.locale,
  ogURL = siteConfig.metaData.ogURL,
}) => {
  const {
    i18n: { language: lng },
  } = useTranslation();
  const lang = lng == 'ru' ? 'ru_RU' : lng == 'en' ? 'en_US' : 'ru_RU';
  return (
    <>
      <Helmet htmlAttributes={{ lang: lang, 'xml:lang': lang, prefix: 'og: https://ogp.me/ns#' }}>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
        <link rel='icon' type='image/png' href={favicon} />
        <title>{metaTitle}</title>

        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='keyword' content={metaKeyword} />
        <meta name='author' content={siteConfig.metaData.author} />
        <meta name='description' content={metaDescription} />

        <meta property='og:title' name='og:title' content={metaTitle} />
        <meta property='og:description' name='og:description' content={metaDescription} />
        <meta property='og:image' name='og:image' content={ogImage} />
        <meta property='og:image:height' name='og:image:height' content='440' />
        <meta property='og:image:width' name='og:image:width' content='510' />
        <meta property='og:locale' name='og:locale' content={locale} />
        <meta property='og:locale:alternate' name='og:locale:alternate' content={'ru_RU'} />
        <meta property='og:locale:alternate' name='og:locale:alternate' content={'en_US'} />
        <meta property='og:type' name='og:type' content={ogType} />
        <meta property='og:site_name' name='og:site_name' content={ogSiteName} />
        <meta property='og:url' name='og:url' content={ogURL} />

        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={metaDescription} />
        <link rel='shortcut icon' href={favicon} type='image/x-icon' />
        <link rel='canonical' href={home} />
        <link rel='alternate' href='/en' hrefLang='en_US' />
        <link rel='alternate' href='/ru' hrefLang='ru_RU' />
      </Helmet>
      <>{children}</>
    </>
  );
};

export default Seo;
