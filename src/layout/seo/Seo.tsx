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
  favicon = siteConfig.favicon,
  locale = siteConfig.metaData.locale,
  alternates,
}) => {
  const {
    i18n: { language: lng },
  } = useTranslation();
  const { pathname } = useLocation();
  const origin = window.location.origin;
  const lang = lng == 'ru' ? 'ru_RU' : lng == 'en' ? 'en_US' : 'ru_RU';
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: lang, 'xml:lang': lang, prefix: 'og: https://ogp.me/ns#' }}
        defaultTitle='Scrooge China - Быстрое пополнение сайта Buff.163'
        prioritizeSeoTags
      >
        <link rel='canonical' href={`${origin}${pathname}`} />
        {alternates &&
          alternates.map(({ href, hrefLang }) => (
            <link rel='alternate' href={`${origin}${href}`} hrefLang={hrefLang} />
          ))}
        <title>{metaTitle}</title>

        <link rel='icon' type='image/svg+xml' href={favicon} />
        <link rel='shortcut icon' href={favicon} type='image/svg+xml' />
        <link rel='apple-touch-icon-precomposed' href={favicon} />
        <link rel='apple-touch-icon' sizes='180x180' href={favicon} />

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
        <meta property='og:site_name' name='og:site_name' content={metaTitle} />
        <meta property='og:url' name='og:url' content={`${origin}${pathname}`} />

        <meta name='twitter:title' content={metaTitle} />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={metaDescription} />
      </Helmet>
      <>{children}</>
    </>
  );
};

export default Seo;
