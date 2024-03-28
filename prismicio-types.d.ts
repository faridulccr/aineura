// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = BannerSlice;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *settings → nav menu*
 */
export interface SettingsDocumentDataNavMenuItem {
  /**
   * link field in *settings → nav menu*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_menu[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * link text field in *settings → nav menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_menu[].link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;
}

/**
 * Item in *settings → company link*
 */
export interface SettingsDocumentDataCompanyLinkItem {
  /**
   * link field in *settings → company link*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.company_link[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *settings → company link*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.company_link[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *settings → product link*
 */
export interface SettingsDocumentDataProductLinkItem {
  /**
   * link field in *settings → product link*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.product_link[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *settings → product link*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.product_link[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *settings → resources link*
 */
export interface SettingsDocumentDataResourcesLinkItem {
  /**
   * link field in *settings → resources link*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.resources_link[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *settings → resources link*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.resources_link[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *settings → legal link*
 */
export interface SettingsDocumentDataLegalLinkItem {
  /**
   * link field in *settings → legal link*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.legal_link[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *settings → legal link*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.legal_link[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *settings → footer logo*
 */
export interface SettingsDocumentDataFooterLogoItem {
  /**
   * logo field in *settings → footer logo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_logo[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * link field in *settings → footer logo*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_logo[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *settings → footer media link*
 */
export interface SettingsDocumentDataFooterMediaLinkItem {
  /**
   * icon field in *settings → footer media link*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_media_link[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * link field in *settings → footer media link*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_media_link[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for settings documents
 */
interface SettingsDocumentData {
  /**
   * nav menu field in *settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.nav_menu[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav_menu: prismic.GroupField<Simplify<SettingsDocumentDataNavMenuItem>>;

  /**
   * FnKnow logo field in *settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.fnknow_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fnknow_logo: prismic.ImageField<never>;

  /**
   * company link field in *settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.company_link[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  company_link: prismic.GroupField<
    Simplify<SettingsDocumentDataCompanyLinkItem>
  >;

  /**
   * product link field in *settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.product_link[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  product_link: prismic.GroupField<
    Simplify<SettingsDocumentDataProductLinkItem>
  >;

  /**
   * resources link field in *settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.resources_link[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  resources_link: prismic.GroupField<
    Simplify<SettingsDocumentDataResourcesLinkItem>
  >;

  /**
   * legal link field in *settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.legal_link[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  legal_link: prismic.GroupField<Simplify<SettingsDocumentDataLegalLinkItem>>;

  /**
   * footer logo field in *settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_logo[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer_logo: prismic.GroupField<Simplify<SettingsDocumentDataFooterLogoItem>>;

  /**
   * copyright field in *settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.copyright
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField;

  /**
   * banner field in *settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * footer media link field in *settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.footer_media_link[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  footer_media_link: prismic.GroupField<
    Simplify<SettingsDocumentDataFooterMediaLinkItem>
  >;
}

/**
 * settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument | SettingsDocument;

/**
 * Primary content in *Banner → Primary*
 */
export interface BannerSliceDefaultPrimary {
  /**
   * banner field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.banner
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * aineura logo field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.aineura_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  aineura_logo: prismic.ImageField<never>;

  /**
   * bot logo field in *Banner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.bot_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bot_logo: prismic.ImageField<never>;

  /**
   * bot link field in *Banner → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.bot_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  bot_link: prismic.LinkField;

  /**
   * banner content field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.banner_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  banner_content: prismic.KeyTextField;

  /**
   * banner content 2 field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.banner_content_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  banner_content_2: prismic.KeyTextField;

  /**
   * banner content 3 field in *Banner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.primary.banner_content_3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  banner_content_3: prismic.KeyTextField;
}

/**
 * Default variation for Banner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BannerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Banner*
 */
type BannerSliceVariation = BannerSliceDefault;

/**
 * Banner Shared Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Banner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BannerSlice = prismic.SharedSlice<"banner", BannerSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavMenuItem,
      SettingsDocumentDataCompanyLinkItem,
      SettingsDocumentDataProductLinkItem,
      SettingsDocumentDataResourcesLinkItem,
      SettingsDocumentDataLegalLinkItem,
      SettingsDocumentDataFooterLogoItem,
      SettingsDocumentDataFooterMediaLinkItem,
      AllDocumentTypes,
      BannerSlice,
      BannerSliceDefaultPrimary,
      BannerSliceVariation,
      BannerSliceDefault,
    };
  }
}
