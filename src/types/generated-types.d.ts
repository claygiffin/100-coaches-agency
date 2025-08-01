type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
declare namespace Queries {
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: boolean; output: boolean; }
  CustomData: { input: Record<string, unknown>; output: Record<string, unknown>; }
  DateTime: { input: string; output: string; }
  FloatType: { input: number; output: number; }
  IntType: { input: number; output: number; }
  ItemId: { input: string; output: string; }
  JsonField: { input: unknown; output: unknown; }
  MetaTagAttributes: { input: Record<string, string>; output: Record<string, string>; }
  UploadId: { input: string; output: string; }
};

type AboutPageModelAboutBodyField = {
  __typename?: 'AboutPageModelAboutBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type AboutPageModelHowBodyField = {
  __typename?: 'AboutPageModelHowBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type AboutPageModelHowLinkField = FormLinkRecord | PageLinkRecord;

type AboutPageModelPartnerBodyField = {
  __typename?: 'AboutPageModelPartnerBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type About Page (about_page) */
type AboutPageRecord = RecordInterface & {
  __typename?: 'AboutPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  aboutBody?: Maybe<AboutPageModelAboutBodyField>;
  aboutHeading: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  howBody: AboutPageModelHowBodyField;
  howDetails: Array<TitleDescriptionRecord>;
  howHeading: Scalars['String']['output'];
  howLink?: Maybe<AboutPageModelHowLinkField>;
  id: Scalars['ItemId']['output'];
  partnerBody?: Maybe<AboutPageModelPartnerBodyField>;
  partnerHeading?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  services: Array<ServiceRecord>;
  servicesHeading: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  teamHeading: Scalars['String']['output'];
  testimonials: Array<TestimonialRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type About Page (about_page) */
type AboutPageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type AdvisorsPageModelAboutBodyField = {
  __typename?: 'AdvisorsPageModelAboutBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type AdvisorsPageModelHowBodyField = {
  __typename?: 'AdvisorsPageModelHowBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type AdvisorsPageModelHowLinkField = FormLinkRecord | PageLinkRecord;

type AdvisorsPageModelPartnerBodyField = {
  __typename?: 'AdvisorsPageModelPartnerBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Advisors Page (advisors_page) */
type AdvisorsPageRecord = RecordInterface & {
  __typename?: 'AdvisorsPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  aboutBody?: Maybe<AdvisorsPageModelAboutBodyField>;
  aboutHeading: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  howBody: AdvisorsPageModelHowBodyField;
  howDetails: Array<TitleDescriptionRecord>;
  howHeading: Scalars['String']['output'];
  howLink?: Maybe<AdvisorsPageModelHowLinkField>;
  id: Scalars['ItemId']['output'];
  logo?: Maybe<FileField>;
  partnerBody?: Maybe<AdvisorsPageModelPartnerBodyField>;
  partnerHeading?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  testimonials: Array<TestimonialRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Advisors Page (advisors_page) */
type AdvisorsPageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type AlertBarModelAlertTextField = {
  __typename?: 'AlertBarModelAlertTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type AlertBarModelLinkField = ArticleLinkRecord | DocumentLinkRecord | ExternalLinkRecord | FormLinkRecord | PageLinkRecord;

/** Record of type Alert Bar (alert_bar) */
type AlertBarRecord = RecordInterface & {
  __typename?: 'AlertBarRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alertText?: Maybe<AlertBarModelAlertTextField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  isActive?: Maybe<Scalars['BooleanType']['output']>;
  link?: Maybe<AlertBarModelLinkField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Alert Bar (alert_bar) */
type AlertBarRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Anchor Link (anchor_link) */
type AnchorLinkRecord = RecordInterface & {
  __typename?: 'AnchorLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  href: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Anchor Link (anchor_link) */
type AnchorLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Archive Page (archive_page) */
type ArchivePageRecord = RecordInterface & {
  __typename?: 'ArchivePageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  archiveBackLink: PageLinkRecord;
  archiveHeading: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Archive Page (archive_page) */
type ArchivePageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ArticleCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  categoryName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ArticleCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  categoryName_ASC = 'categoryName_ASC',
  categoryName_DESC = 'categoryName_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Article Category (article_category) */
type ArticleCategoryRecord = RecordInterface & {
  __typename?: 'ArticleCategoryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  categoryName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Article Category (article_category) */
type ArticleCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Article Link (article_link) */
type ArticleLinkRecord = RecordInterface & {
  __typename?: 'ArticleLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  article: ArticleRecord;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Article Link (article_link) */
type ArticleLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ArticleModelBodyField = {
  __typename?: 'ArticleModelBodyField';
  blocks: Array<ImageRecord>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ArticleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  thumbnail?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ArticleModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Article (article) */
type ArticleRecord = RecordInterface & {
  __typename?: 'ArticleRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body: ArticleModelBodyField;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<ImageFileField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Article (article) */
type ArticleRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Articles Page (articles_page) */
type ArticlesPageRecord = RecordInterface & {
  __typename?: 'ArticlesPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  pageHeading?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Articles Page (articles_page) */
type ArticlesPageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type AuthorModelBioField = {
  __typename?: 'AuthorModelBioField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type AuthorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  bio?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum AuthorModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Author (author) */
type AuthorRecord = RecordInterface & {
  __typename?: 'AuthorRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bio: AuthorModelBioField;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  photo: FileField;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Author (author) */
type AuthorRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type BookModelDescriptionBodyField = {
  __typename?: 'BookModelDescriptionBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type BookModelDescriptionCtaButtonField = ExternalLinkRecord | PageLinkRecord | PdfRecord;

type BookModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<BookModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BookModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  authors?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  descriptionBody?: InputMaybe<StructuredTextFilter>;
  descriptionHeading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  miscellaneousInformationBody?: InputMaybe<StructuredTextFilter>;
  miscellaneousInformationHeading?: InputMaybe<StringFilter>;
  secondaryCta?: InputMaybe<TextFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<TextFilter>;
  thumbnail?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

type BookModelMiscellaneousInformationBodyField = {
  __typename?: 'BookModelMiscellaneousInformationBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

enum BookModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  descriptionHeading_ASC = 'descriptionHeading_ASC',
  descriptionHeading_DESC = 'descriptionHeading_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  miscellaneousInformationHeading_ASC = 'miscellaneousInformationHeading_ASC',
  miscellaneousInformationHeading_DESC = 'miscellaneousInformationHeading_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Book (book) */
type BookRecord = RecordInterface & {
  __typename?: 'BookRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  authors: Array<AuthorRecord>;
  createdAt: Scalars['DateTime']['output'];
  descriptionBody?: Maybe<BookModelDescriptionBodyField>;
  descriptionCtaButton?: Maybe<BookModelDescriptionCtaButtonField>;
  descriptionHeading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  miscellaneousInformationBody?: Maybe<BookModelMiscellaneousInformationBodyField>;
  miscellaneousInformationHeading?: Maybe<Scalars['String']['output']>;
  purchaseLink?: Maybe<ExternalLinkRecord>;
  secondaryCta?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  testimonials: Array<BookTestimonialRecord>;
  thumbnail: FileField;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Book (book) */
type BookRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Book (book) */
type BookRecordsecondaryCtaArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Book (book) */
type BookRecordsubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type BookTestimonialModelAttributionTitleField = {
  __typename?: 'BookTestimonialModelAttributionTitleField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type BookTestimonialModelQuoteField = {
  __typename?: 'BookTestimonialModelQuoteField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Book Testimonial (book_testimonial) */
type BookTestimonialRecord = RecordInterface & {
  __typename?: 'BookTestimonialRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  attributionName: Scalars['String']['output'];
  attributionTitle?: Maybe<BookTestimonialModelAttributionTitleField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  quote: BookTestimonialModelQuoteField;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Book Testimonial (book_testimonial) */
type BookTestimonialRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

type CoachCategoryCtaModelCtaBodyField = {
  __typename?: 'CoachCategoryCtaModelCtaBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Coach Category CTA (coach_category_cta) */
type CoachCategoryCtaRecord = RecordInterface & {
  __typename?: 'CoachCategoryCtaRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  ctaBody?: Maybe<CoachCategoryCtaModelCtaBodyField>;
  ctaHeading: Scalars['String']['output'];
  ctaLinkText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Coach Category CTA (coach_category_cta) */
type CoachCategoryCtaRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CoachCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CoachCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CoachCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  categoryName?: InputMaybe<StringFilter>;
  categoryNameFull?: InputMaybe<StringFilter>;
  categorySlug?: InputMaybe<SlugFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  featuredCoach?: InputMaybe<LinkFilter>;
  featuredCoaches?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  seo?: InputMaybe<SeoFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum CoachCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  categoryNameFull_ASC = 'categoryNameFull_ASC',
  categoryNameFull_DESC = 'categoryNameFull_DESC',
  categoryName_ASC = 'categoryName_ASC',
  categoryName_DESC = 'categoryName_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Coach Category (coach_category) */
type CoachCategoryRecord = RecordInterface & {
  __typename?: 'CoachCategoryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  categoryName: Scalars['String']['output'];
  categoryNameFull?: Maybe<Scalars['String']['output']>;
  categorySlug: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  featuredCoach: CoachRecord;
  featuredCoaches: Array<CoachRecord>;
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  seo?: Maybe<SeoField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Coach Category (coach_category) */
type CoachCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Coach Category (coach_category) */
type CoachCategoryRecorddescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Coach Menu Link (coach_menu_link) */
type CoachMenuLinkRecord = RecordInterface & {
  __typename?: 'CoachMenuLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Coach Menu Link (coach_menu_link) */
type CoachMenuLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CoachModelBioField = {
  __typename?: 'CoachModelBioField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type CoachModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CoachModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CoachModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  bio?: InputMaybe<StructuredTextFilter>;
  bioSummary?: InputMaybe<TextFilter>;
  coachingCategories?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  jobTitleExtended?: InputMaybe<TextFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<FileFilter>;
  photoAlignment?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum CoachModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  jobTitle_ASC = 'jobTitle_ASC',
  jobTitle_DESC = 'jobTitle_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  photoAlignment_ASC = 'photoAlignment_ASC',
  photoAlignment_DESC = 'photoAlignment_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Coach (coach) */
type CoachRecord = RecordInterface & {
  __typename?: 'CoachRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bio?: Maybe<CoachModelBioField>;
  bioSummary?: Maybe<Scalars['String']['output']>;
  coachingCategories: Array<CoachCategoryRecord>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  jobTitle: Scalars['String']['output'];
  jobTitleExtended?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  photo: FileField;
  photoAlignment: Scalars['String']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Coach (coach) */
type CoachRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Coach (coach) */
type CoachRecordbioSummaryArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Coach (coach) */
type CoachRecordjobTitleExtendedArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Block of type Companies Section (companies_section) */
type CompaniesSectionRecord = RecordInterface & {
  __typename?: 'CompaniesSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  companies: Array<CompanyRecord>;
  createdAt: Scalars['DateTime']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Companies Section (companies_section) */
type CompaniesSectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Company (company) */
type CompanyRecord = RecordInterface & {
  __typename?: 'CompanyRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  icon: FileField;
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Company (company) */
type CompanyRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ContactPageModelFormField = FormRecord | HubspotFormEmbedRecord;

type ContactPageModelIntroField = {
  __typename?: 'ContactPageModelIntroField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Contact Page (contact_page) */
type ContactPageRecord = RecordInterface & {
  __typename?: 'ContactPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  companiesSection: CompaniesSectionRecord;
  createdAt: Scalars['DateTime']['output'];
  form: ContactPageModelFormField;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  intro?: Maybe<ContactPageModelIntroField>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Contact Page (contact_page) */
type ContactPageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Courses Coach (courses_coach) */
type CoursesCoachRecord = RecordInterface & {
  __typename?: 'CoursesCoachRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: FileField;
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Courses Coach (courses_coach) */
type CoursesCoachRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Create Active Campaign Contact (create_active_campaign_contact_action) */
type CreateActiveCampaignContactActionRecord = RecordInterface & {
  __typename?: 'CreateActiveCampaignContactActionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updateIfExists?: Maybe<Scalars['BooleanType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Create Active Campaign Contact (create_active_campaign_contact_action) */
type CreateActiveCampaignContactActionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Create Hubspot Contact (create_hubspot_contact_action) */
type CreateHubspotContactActionRecord = RecordInterface & {
  __typename?: 'CreateHubspotContactActionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Create Hubspot Contact (create_hubspot_contact_action) */
type CreateHubspotContactActionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Block of type Document Link (document_link) */
type DocumentLinkRecord = RecordInterface & {
  __typename?: 'DocumentLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  document: FileField;
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Document Link (document_link) */
type DocumentLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type EmbeddedFormModelSuccessMessageField = {
  __typename?: 'EmbeddedFormModelSuccessMessageField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Embedded Form (embedded_form) */
type EmbeddedFormRecord = RecordInterface & {
  __typename?: 'EmbeddedFormRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  recipients: Scalars['String']['output'];
  submitButtonText: Scalars['String']['output'];
  successMessage?: Maybe<EmbeddedFormModelSuccessMessageField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Embedded Form (embedded_form) */
type EmbeddedFormRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type External Link (external_link) */
type ExternalLinkRecord = RecordInterface & {
  __typename?: 'ExternalLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};


/** Block of type External Link (external_link) */
type ExternalLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type FileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type FileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


type FileFieldInterfacealtArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type FileFieldInterfacecustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfacefocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type FileFieldInterfacetitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Block of type Form Link (form_link) */
type FormLinkRecord = RecordInterface & {
  __typename?: 'FormLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  form: FormModalRecord;
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Form Link (form_link) */
type FormLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FormModalModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormModalModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormModalModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  form?: InputMaybe<LinkFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  intro?: InputMaybe<StructuredTextFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

type FormModalModelIntroField = {
  __typename?: 'FormModalModelIntroField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

enum FormModalModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  heading_ASC = 'heading_ASC',
  heading_DESC = 'heading_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Form Modal (form_modal) */
type FormModalRecord = RecordInterface & {
  __typename?: 'FormModalRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  form: FormRecord;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  intro?: Maybe<FormModalModelIntroField>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Form Modal (form_modal) */
type FormModalRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type FormModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  formName?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  submitButtonText?: InputMaybe<StringFilter>;
  successMessage?: InputMaybe<StructuredTextFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

type FormModelFormFieldsField = FormSelectFieldRecord | FormTextAreaRecord | FormTextFieldRecord;

type FormModelOnSubmitField = CreateHubspotContactActionRecord | OpenDocumentActionRecord | SendEmailActionRecord;

enum FormModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  formName_ASC = 'formName_ASC',
  formName_DESC = 'formName_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  submitButtonText_ASC = 'submitButtonText_ASC',
  submitButtonText_DESC = 'submitButtonText_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type FormModelSuccessMessageField = {
  __typename?: 'FormModelSuccessMessageField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Form (form) */
type FormRecord = RecordInterface & {
  __typename?: 'FormRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  formFields: Array<FormModelFormFieldsField>;
  formName: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  onSubmit: Array<FormModelOnSubmitField>;
  submitButtonText: Scalars['String']['output'];
  successMessage: FormModelSuccessMessageField;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Form (form) */
type FormRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Form Select Field (form_select_field) */
type FormSelectFieldRecord = RecordInterface & {
  __typename?: 'FormSelectFieldRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  options: Array<FormSelectOptionRecord>;
  required?: Maybe<Scalars['BooleanType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  width: Scalars['String']['output'];
};


/** Block of type Form Select Field (form_select_field) */
type FormSelectFieldRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Form Select Option (form_select_option) */
type FormSelectOptionRecord = RecordInterface & {
  __typename?: 'FormSelectOptionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};


/** Block of type Form Select Option (form_select_option) */
type FormSelectOptionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Form Text Area (form_text_area) */
type FormTextAreaRecord = RecordInterface & {
  __typename?: 'FormTextAreaRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['BooleanType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Form Text Area (form_text_area) */
type FormTextAreaRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Form Text Field (form_text_field) */
type FormTextFieldRecord = RecordInterface & {
  __typename?: 'FormTextFieldRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  fieldType: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  isInternational?: Maybe<Scalars['BooleanType']['output']>;
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['BooleanType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  width: Scalars['String']['output'];
};


/** Block of type Form Text Field (form_text_field) */
type FormTextFieldRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

type HomeCoachesSectionModelBodyField = {
  __typename?: 'HomeCoachesSectionModelBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type HomeCoachesSectionModelCtaField = CoachMenuLinkRecord | FormLinkRecord | PageLinkRecord;

/** Block of type Home Coaches Section (home_coaches_section) */
type HomeCoachesSectionRecord = RecordInterface & {
  __typename?: 'HomeCoachesSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  backgroundImages: Array<ImageFileField>;
  body?: Maybe<HomeCoachesSectionModelBodyField>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<HomeCoachesSectionModelCtaField>;
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Home Coaches Section (home_coaches_section) */
type HomeCoachesSectionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type HomePageModelContactBodyField = {
  __typename?: 'HomePageModelContactBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type HomePageModelMarshallBodyField = {
  __typename?: 'HomePageModelMarshallBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type HomePageModelMarshallCtaField = CoachMenuLinkRecord | FormLinkRecord | PageLinkRecord;

type HomePageModelPromiseBodyField = {
  __typename?: 'HomePageModelPromiseBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type HomePageModelPromiseCtaField = CoachMenuLinkRecord | FormLinkRecord | PageLinkRecord;

type HomePageModelResultsBodyField = {
  __typename?: 'HomePageModelResultsBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Home Page (home_page) */
type HomePageRecord = RecordInterface & {
  __typename?: 'HomePageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  coachesSection: HomeCoachesSectionRecord;
  companiesSection: CompaniesSectionRecord;
  contactBody?: Maybe<HomePageModelContactBodyField>;
  contactForm: FormRecord;
  contactHeading?: Maybe<Scalars['String']['output']>;
  contactLink?: Maybe<PageLinkRecord>;
  createdAt: Scalars['DateTime']['output'];
  heroHeading1: Scalars['String']['output'];
  heroHeading2: Scalars['String']['output'];
  heroImages: Array<FileField>;
  id: Scalars['ItemId']['output'];
  introHeading?: Maybe<Scalars['String']['output']>;
  marshallBody?: Maybe<HomePageModelMarshallBodyField>;
  marshallCta?: Maybe<HomePageModelMarshallCtaField>;
  marshallHeading?: Maybe<Scalars['String']['output']>;
  marshallImage?: Maybe<FileField>;
  marshallQuote?: Maybe<QuoteRecord>;
  promiseBody?: Maybe<HomePageModelPromiseBodyField>;
  promiseCta: HomePageModelPromiseCtaField;
  promiseHeading: Scalars['String']['output'];
  resultsBody?: Maybe<HomePageModelResultsBodyField>;
  resultsHeading?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  thoughtLeadershipItems: Array<ThoughtLeadershipItemRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Home Page (home_page) */
type HomePageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type HubspotFormEmbedModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HubspotFormEmbedModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HubspotFormEmbedModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  formId?: InputMaybe<StringFilter>;
  formName?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  portalId?: InputMaybe<StringFilter>;
  region?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum HubspotFormEmbedModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  formId_ASC = 'formId_ASC',
  formId_DESC = 'formId_DESC',
  formName_ASC = 'formName_ASC',
  formName_DESC = 'formName_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  portalId_ASC = 'portalId_ASC',
  portalId_DESC = 'portalId_DESC',
  region_ASC = 'region_ASC',
  region_DESC = 'region_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Hubspot Form Embed (hubspot_form_embed) */
type HubspotFormEmbedRecord = RecordInterface & {
  __typename?: 'HubspotFormEmbedRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  formId: Scalars['String']['output'];
  formName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  portalId: Scalars['String']['output'];
  region: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Hubspot Form Embed (hubspot_form_embed) */
type HubspotFormEmbedRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImageFileField = FileFieldInterface & {
  __typename?: 'ImageFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint: focalPoint;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width: Scalars['IntType']['output'];
};


type ImageFileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type ImageFileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


type ImageFileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type ImageFileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Block of type Image (image) */
type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: ImageFileField;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Image (image) */
type ImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Foreground Type
   *
   * Specifies the image foreground type for background removal.
   *
   * Depends on: `bg-remove=true`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
   */
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>;
  /**
   * Background Removal Semi Transparency
   *
   * Enables background removal while retaining semi-transparent areas.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
   */
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Replace Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Blur
   *
   * Specifies the amount of blur to apply to detected faces. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
   */
  faceBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Pixelation
   *
   * Specifies the pixelation amount of the face.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
   */
  facePixel?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * License Plate Blur
   *
   * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
   */
  lpBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark If Minimum Height
   *
   * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
   */
  markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark If Minimum Width
   *
   * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
   */
  markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Object Removal Negative Prompt
   *
   * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
   */
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Prompt
   *
   * Suggest auto generative fill for the object-removal-rect parameter
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
   */
  objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal
   *
   * Using a specified rectangle, an object is removed from the image
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
   */
  objectRemovalRect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Seed
   *
   * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
   *
   * Depends on: `object-removal-rect`, `object-removal-prompt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
   */
  objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Rasterize Bypass
   *
   * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
   */
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Rotation Type
   *
   * Changes the rotation type.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
   */
  rotType?: InputMaybe<ImgixParamsRotType>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Alpha
   *
   * Specifies a trim alpha on a trim operation.
   *
   * Depends on: `trim=alpha`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
   */
  trimAlpha?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

enum ImgixParamsBgRemoveFgType {
  auto = 'auto',
  car = 'car'
}

enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  origin = 'origin',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

enum ImgixParamsFill {
  blur = 'blur',
  gen = 'gen',
  generative = 'generative',
  gradient = 'gradient',
  solid = 'solid'
}

enum ImgixParamsFillGenPos {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientCs {
  hsl = 'hsl',
  lch = 'lch',
  linear = 'linear',
  oklab = 'oklab',
  srgb = 'srgb'
}

enum ImgixParamsFillGradientLinearDirection {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientType {
  linear = 'linear',
  radial = 'radial'
}

enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsMarkTile {
  grid = 'grid'
}

enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

enum ImgixParamsRotType {
  pivot = 'pivot',
  straighten = 'straighten'
}

enum ImgixParamsTransparency {
  grid = 'grid'
}

enum ImgixParamsTrim {
  alpha = 'alpha',
  auto = 'auto',
  color = 'color'
}

enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter by ID */
type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

/** Specifies how to filter Single-link fields */
type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Specifies how to filter Multiple-links fields */
type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

type NavModelButtonField = ArticleLinkRecord | CoachMenuLinkRecord | DocumentLinkRecord | ExternalLinkRecord | FormLinkRecord | PageLinkRecord;

type NavModelLinksField = CoachMenuLinkRecord | ExternalLinkRecord | FormLinkRecord | PageLinkRecord;

/** Record of type Nav (nav) */
type NavRecord = RecordInterface & {
  __typename?: 'NavRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  button?: Maybe<NavModelButtonField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  links: Array<NavModelLinksField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Nav (nav) */
type NavRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type NewsItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  publication?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

enum NewsItemModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  publication_ASC = 'publication_ASC',
  publication_DESC = 'publication_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type News Item (news_item) */
type NewsItemRecord = RecordInterface & {
  __typename?: 'NewsItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  category: ArticleCategoryRecord;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  publication: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type News Item (news_item) */
type NewsItemRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type NewsletterModelBodyField = {
  __typename?: 'NewsletterModelBodyField';
  blocks: Array<ImageRecord>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type NewsletterModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsletterModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsletterModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  thumbnail?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum NewsletterModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Newsletter (newsletter) */
type NewsletterRecord = RecordInterface & {
  __typename?: 'NewsletterRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body: NewsletterModelBodyField;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<ImageFileField>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Newsletter (newsletter) */
type NewsletterRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Open Document (open_document_action) */
type OpenDocumentActionRecord = RecordInterface & {
  __typename?: 'OpenDocumentActionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  document: FileField;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Open Document (open_document_action) */
type OpenDocumentActionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

type PageLinkModelPageField = AboutPageRecord | ArchivePageRecord | ArticlesPageRecord | CoachCategoryRecord | ContactPageRecord | HomePageRecord | ThoughtLeadershipPageRecord;

/** Block of type Page Link (page_link) */
type PageLinkRecord = RecordInterface & {
  __typename?: 'PageLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  linkText: Scalars['String']['output'];
  page: PageLinkModelPageField;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Page Link (page_link) */
type PageLinkRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type PDF (pdf) */
type PdfRecord = RecordInterface & {
  __typename?: 'PdfRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  pdf: FileField;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type PDF (pdf) */
type PdfRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by publication datetime */
type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allArticleCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allArticlesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allAuthorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBooksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCoachCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCoachesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFormModalsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFormsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allHubspotFormEmbedsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewslettersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSWCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTeamMembersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTestimonialsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allVideosMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns the single instance record */
  aboutPage?: Maybe<AboutPageRecord>;
  /** Returns the single instance record */
  advisorsPage?: Maybe<AdvisorsPageRecord>;
  /** Returns the single instance record */
  alertBar?: Maybe<AlertBarRecord>;
  /** Returns a collection of records */
  allArticleCategories: Array<ArticleCategoryRecord>;
  /** Returns a collection of records */
  allArticles: Array<ArticleRecord>;
  /** Returns a collection of records */
  allAuthors: Array<AuthorRecord>;
  /** Returns a collection of records */
  allBooks: Array<BookRecord>;
  /** Returns a collection of records */
  allCoachCategories: Array<CoachCategoryRecord>;
  /** Returns a collection of records */
  allCoaches: Array<CoachRecord>;
  /** Returns a collection of records */
  allFormModals: Array<FormModalRecord>;
  /** Returns a collection of records */
  allForms: Array<FormRecord>;
  /** Returns a collection of records */
  allHubspotFormEmbeds: Array<HubspotFormEmbedRecord>;
  /** Returns a collection of records */
  allNewsItems: Array<NewsItemRecord>;
  /** Returns a collection of records */
  allNewsletters: Array<NewsletterRecord>;
  /** Returns a collection of records */
  allSWCategories: Array<SWCategoryRecord>;
  /** Returns a collection of records */
  allTeamMembers: Array<TeamMemberRecord>;
  /** Returns a collection of records */
  allTestimonials: Array<TestimonialRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a collection of records */
  allVideos: Array<VideoRecord>;
  /** Returns the single instance record */
  archivePage?: Maybe<ArchivePageRecord>;
  /** Returns a specific record */
  article?: Maybe<ArticleRecord>;
  /** Returns a specific record */
  articleCategory?: Maybe<ArticleCategoryRecord>;
  /** Returns the single instance record */
  articlesPage?: Maybe<ArticlesPageRecord>;
  /** Returns a specific record */
  author?: Maybe<AuthorRecord>;
  /** Returns a specific record */
  book?: Maybe<BookRecord>;
  /** Returns a specific record */
  coach?: Maybe<CoachRecord>;
  /** Returns a specific record */
  coachCategory?: Maybe<CoachCategoryRecord>;
  /** Returns the single instance record */
  coachCategoryCta?: Maybe<CoachCategoryCtaRecord>;
  /** Returns the single instance record */
  contactPage?: Maybe<ContactPageRecord>;
  /** Returns a specific record */
  form?: Maybe<FormRecord>;
  /** Returns a specific record */
  formModal?: Maybe<FormModalRecord>;
  /** Returns the single instance record */
  homePage?: Maybe<HomePageRecord>;
  /** Returns a specific record */
  hubspotFormEmbed?: Maybe<HubspotFormEmbedRecord>;
  /** Returns the single instance record */
  nav?: Maybe<NavRecord>;
  /** Returns a specific record */
  newsItem?: Maybe<NewsItemRecord>;
  /** Returns a specific record */
  newsletter?: Maybe<NewsletterRecord>;
  /** Returns a specific record */
  sWCategory?: Maybe<SWCategoryRecord>;
  /** Returns a specific record */
  teamMember?: Maybe<TeamMemberRecord>;
  /** Returns a specific record */
  testimonial?: Maybe<TestimonialRecord>;
  /** Returns the single instance record */
  thoughtLeadershipPage?: Maybe<ThoughtLeadershipPageRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
  /** Returns a specific record */
  video?: Maybe<VideoRecord>;
};


/** The query root for this schema */
type Query_allArticleCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allArticlesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allAuthorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allBooksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BookModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allCoachCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CoachCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allCoachesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CoachModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFormModalsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormModalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allFormsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allHubspotFormEmbedsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HubspotFormEmbedModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allNewsItemsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allNewslettersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsletterModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allSWCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SWCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allTeamMembersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeamMemberModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allTestimonialsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allVideosMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_siteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryaboutPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryadvisorsPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryalertBarArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryallArticleCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallArticlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallAuthorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallBooksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BookModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BookModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallCoachCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CoachCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CoachCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallCoachesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CoachModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CoachModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFormModalsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormModalModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormModalModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallFormsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallHubspotFormEmbedsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HubspotFormEmbedModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HubspotFormEmbedModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallNewsItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallNewslettersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsletterModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsletterModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallSWCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SWCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SWCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallTeamMembersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeamMemberModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeamMemberModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallTestimonialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryallVideosArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VideoModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<VideoModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
type QueryarchivePageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryarticleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
};


/** The query root for this schema */
type QueryarticleCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ArticleCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ArticleCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QueryarticlesPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryauthorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AuthorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AuthorModelOrderBy>>>;
};


/** The query root for this schema */
type QuerybookArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BookModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BookModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycoachArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CoachModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CoachModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycoachCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CoachCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CoachCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycoachCategoryCtaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerycontactPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryformArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormModelOrderBy>>>;
};


/** The query root for this schema */
type QueryformModalArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FormModalModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FormModalModelOrderBy>>>;
};


/** The query root for this schema */
type QueryhomePageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryhubspotFormEmbedArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HubspotFormEmbedModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HubspotFormEmbedModelOrderBy>>>;
};


/** The query root for this schema */
type QuerynavArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerynewsItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsItemModelOrderBy>>>;
};


/** The query root for this schema */
type QuerynewsletterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsletterModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsletterModelOrderBy>>>;
};


/** The query root for this schema */
type QuerysWCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SWCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SWCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QueryteamMemberArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TeamMemberModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TeamMemberModelOrderBy>>>;
};


/** The query root for this schema */
type QuerytestimonialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialModelOrderBy>>>;
};


/** The query root for this schema */
type QuerythoughtLeadershipPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryuploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};


/** The query root for this schema */
type QueryvideoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VideoModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<VideoModelOrderBy>>>;
};

type QuoteModelQuoteField = {
  __typename?: 'QuoteModelQuoteField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Quote (quote) */
type QuoteRecord = RecordInterface & {
  __typename?: 'QuoteRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  attribution?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  quote?: Maybe<QuoteModelQuoteField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Quote (quote) */
type QuoteRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


type RecordInterface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

type SWCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SWCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SWCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  categoryName?: InputMaybe<StringFilter>;
  categoryNameFull?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  heroImage?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  seo?: InputMaybe<SeoFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum SWCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  categoryNameFull_ASC = 'categoryNameFull_ASC',
  categoryNameFull_DESC = 'categoryNameFull_DESC',
  categoryName_ASC = 'categoryName_ASC',
  categoryName_DESC = 'categoryName_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Speakers & Workshops Category (s_w_category) */
type SWCategoryRecord = RecordInterface & {
  __typename?: 'SWCategoryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  categoryName: Scalars['String']['output'];
  categoryNameFull?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  heroImage: FileField;
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  seo?: Maybe<SeoField>;
  topics: Array<TopicRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Speakers & Workshops Category (s_w_category) */
type SWCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Speakers & Workshops Category (s_w_category) */
type SWCategoryRecorddescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type Send Email (send_email_action) */
type SendEmailActionRecord = RecordInterface & {
  __typename?: 'SendEmailActionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  recipients: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Send Email (send_email_action) */
type SendEmailActionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

/** Specifies how to filter SEO meta tags fields */
type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

type ServiceModelDescriptionField = {
  __typename?: 'ServiceModelDescriptionField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ServiceModelLinkField = CoachMenuLinkRecord | PageLinkRecord;

/** Block of type Service (service) */
type ServiceRecord = RecordInterface & {
  __typename?: 'ServiceRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<ServiceModelDescriptionField>;
  id: Scalars['ItemId']['output'];
  link: Array<ServiceModelLinkField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Service (service) */
type ServiceRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


type SitefaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


type SiteglobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum SiteLocale {
  en = 'en'
}

/** Specifies how to filter Slug fields */
type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by status */
type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Structured Text fields values */
type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

type TeamMemberModelBioField = {
  __typename?: 'TeamMemberModelBioField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type TeamMemberModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeamMemberModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeamMemberModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  bio?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  jobTitleExtended?: InputMaybe<TextFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<FileFilter>;
  photoAlignment?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum TeamMemberModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  jobTitle_ASC = 'jobTitle_ASC',
  jobTitle_DESC = 'jobTitle_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  photoAlignment_ASC = 'photoAlignment_ASC',
  photoAlignment_DESC = 'photoAlignment_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Team Member (team_member) */
type TeamMemberRecord = RecordInterface & {
  __typename?: 'TeamMemberRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bio?: Maybe<TeamMemberModelBioField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  jobTitle: Scalars['String']['output'];
  jobTitleExtended?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  photo: FileField;
  photoAlignment: Scalars['String']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Team Member (team_member) */
type TeamMemberRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Team Member (team_member) */
type TeamMemberRecordjobTitleExtendedArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

type TestimonialModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  attribution?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  logo?: InputMaybe<FileFilter>;
  testimonial?: InputMaybe<StructuredTextFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum TestimonialModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  attribution_ASC = 'attribution_ASC',
  attribution_DESC = 'attribution_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type TestimonialModelTestimonialField = {
  __typename?: 'TestimonialModelTestimonialField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Testimonial (testimonial) */
type TestimonialRecord = RecordInterface & {
  __typename?: 'TestimonialRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  attribution: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  logo: FileField;
  testimonial: TestimonialModelTestimonialField;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Testimonial (testimonial) */
type TestimonialRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter text fields */
type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type ThoughtLeadershipFeaturedItemModelBodyField = {
  __typename?: 'ThoughtLeadershipFeaturedItemModelBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ThoughtLeadershipFeaturedItemModelLinkField = ArticleLinkRecord | DocumentLinkRecord | ExternalLinkRecord | FormLinkRecord | PageLinkRecord | PdfRecord;

/** Block of type Thought Leadership Featured Item (thought_leadership_featured_item) */
type ThoughtLeadershipFeaturedItemRecord = RecordInterface & {
  __typename?: 'ThoughtLeadershipFeaturedItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<ThoughtLeadershipFeaturedItemModelBodyField>;
  createdAt: Scalars['DateTime']['output'];
  heading: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<ImageFileField>;
  link?: Maybe<ThoughtLeadershipFeaturedItemModelLinkField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Thought Leadership Featured Item (thought_leadership_featured_item) */
type ThoughtLeadershipFeaturedItemRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ThoughtLeadershipItemModelBodyField = {
  __typename?: 'ThoughtLeadershipItemModelBodyField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ThoughtLeadershipItemModelLinkField = ArticleLinkRecord | DocumentLinkRecord | ExternalLinkRecord | FormLinkRecord | PageLinkRecord;

/** Block of type Thought Leadership Item (thought_leadership_item) */
type ThoughtLeadershipItemRecord = RecordInterface & {
  __typename?: 'ThoughtLeadershipItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<ThoughtLeadershipItemModelBodyField>;
  createdAt: Scalars['DateTime']['output'];
  heading: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<ImageFileField>;
  link?: Maybe<ThoughtLeadershipItemModelLinkField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Thought Leadership Item (thought_leadership_item) */
type ThoughtLeadershipItemRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ThoughtLeadershipPageModelCoursesButtonField = ExternalLinkRecord | PageLinkRecord;

type ThoughtLeadershipPageModelCoursesDescriptionField = {
  __typename?: 'ThoughtLeadershipPageModelCoursesDescriptionField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

type ThoughtLeadershipPageModelHeroTextField = {
  __typename?: 'ThoughtLeadershipPageModelHeroTextField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Thought Leadership Page (thought_leadership_page) */
type ThoughtLeadershipPageRecord = RecordInterface & {
  __typename?: 'ThoughtLeadershipPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  articlesArchiveButton?: Maybe<PageLinkRecord>;
  articlesHeading: Scalars['String']['output'];
  articlesItems: Array<ArticleRecord>;
  articlesVisible?: Maybe<Scalars['BooleanType']['output']>;
  booksArchiveButton?: Maybe<PageLinkRecord>;
  booksHeading: Scalars['String']['output'];
  booksItems: Array<BookRecord>;
  booksVisible?: Maybe<Scalars['BooleanType']['output']>;
  coursesButton?: Maybe<ThoughtLeadershipPageModelCoursesButtonField>;
  coursesCoaches: Array<CoursesCoachRecord>;
  coursesDescription: ThoughtLeadershipPageModelCoursesDescriptionField;
  coursesHeading: Scalars['String']['output'];
  coursesImage: FileField;
  coursesVisible?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  featuredBody: ThoughtLeadershipFeaturedItemRecord;
  featuredHeading: Scalars['String']['output'];
  featuredVisible?: Maybe<Scalars['BooleanType']['output']>;
  heroHeadingLine: Scalars['String']['output'];
  heroImage?: Maybe<FileField>;
  heroLinks: Array<AnchorLinkRecord>;
  heroLinksLabel?: Maybe<Scalars['String']['output']>;
  heroText: ThoughtLeadershipPageModelHeroTextField;
  id: Scalars['ItemId']['output'];
  newslettersArchiveButton?: Maybe<PageLinkRecord>;
  newslettersHeading: Scalars['String']['output'];
  newslettersItem?: Maybe<NewsletterRecord>;
  newslettersLabel: Scalars['String']['output'];
  newslettersVisible?: Maybe<Scalars['BooleanType']['output']>;
  seo?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  videosArchiveButton?: Maybe<PageLinkRecord>;
  videosHeading: Scalars['String']['output'];
  videosItems: Array<VideoRecord>;
  videosVisible?: Maybe<Scalars['BooleanType']['output']>;
};


/** Record of type Thought Leadership Page (thought_leadership_page) */
type ThoughtLeadershipPageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type TitleDescriptionModelDescriptionField = {
  __typename?: 'TitleDescriptionModelDescriptionField';
  blocks: Array<Scalars['String']['output']>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type Title + Description (title_description) */
type TitleDescriptionRecord = RecordInterface & {
  __typename?: 'TitleDescriptionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: TitleDescriptionModelDescriptionField;
  id: Scalars['ItemId']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Title + Description (title_description) */
type TitleDescriptionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Topic (topic) */
type TopicRecord = RecordInterface & {
  __typename?: 'TopicRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  coaches: Array<CoachRecord>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Topic (topic) */
type TopicRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Topic (topic) */
type TopicRecorddescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by upload type */
type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


type UploadVideoFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type UploadVideoFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


type UploadVideoFieldmp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


type UploadVideoFieldthumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


type UploadVideoFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType']['output'];
  provider: Scalars['String']['output'];
  providerUid: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

/** Specifies how to filter Video fields */
type VideoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

type VideoModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  file?: InputMaybe<VideoFilter>;
  id?: InputMaybe<ItemIdFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum VideoModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

/** Record of type Video (video) */
type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  file: VideoField;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Video (video) */
type VideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageRecord', heroHeading1: string, heroHeading2: string, introHeading?: string | null, promiseHeading: string, marshallHeading?: string | null, resultsHeading?: string | null, contactHeading?: string | null, companiesSection: { __typename: 'CompaniesSectionRecord', id: string, heading?: string | null, companies: Array<{ __typename: 'CompanyRecord', id: string, name: string, icon: { __typename?: 'FileField', format: string, url: string, width?: number | null, height?: number | null, alt?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } }> }, coachesSection: { __typename: 'HomeCoachesSectionRecord', id: string, heading?: string | null, body?: { __typename?: 'HomeCoachesSectionModelBodyField', value: unknown } | null, cta?: { __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, backgroundImages: Array<{ __typename?: 'ImageFileField', horizontal: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, vertical: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }> }, thoughtLeadershipItems: Array<{ __typename: 'ThoughtLeadershipItemRecord', id: string, heading: string, body?: { __typename?: 'ThoughtLeadershipItemModelBodyField', value: unknown } | null, link?: { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } } | { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, image?: { __typename?: 'ImageFileField', responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, heroImages: Array<{ __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }>, promiseBody?: { __typename?: 'HomePageModelPromiseBodyField', value: unknown } | null, promiseCta: { __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } }, marshallBody?: { __typename?: 'HomePageModelMarshallBodyField', value: unknown } | null, marshallCta?: { __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, marshallQuote?: { __typename?: 'QuoteRecord', attribution?: string | null, quote?: { __typename?: 'QuoteModelQuoteField', value: unknown } | null } | null, marshallImage?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null, resultsBody?: { __typename?: 'HomePageModelResultsBodyField', value: unknown } | null, contactBody?: { __typename?: 'HomePageModelContactBodyField', value: unknown } | null, contactLink?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, contactForm: { __typename: 'FormRecord', id: string, formName: string, submitButtonText: string, formFields: Array<{ __typename: 'FormSelectFieldRecord', id: string, label: string, required?: boolean | null, width: string, options: Array<{ __typename?: 'FormSelectOptionRecord', id: string, value: string }> } | { __typename: 'FormTextAreaRecord', id: string, label: string, required?: boolean | null } | { __typename: 'FormTextFieldRecord', id: string, label: string, fieldType: string, isInternational?: boolean | null, width: string, required?: boolean | null }>, successMessage: { __typename?: 'FormModelSuccessMessageField', value: unknown }, onSubmit: Array<{ __typename: 'CreateHubspotContactActionRecord' } | { __typename: 'OpenDocumentActionRecord', document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'SendEmailActionRecord', recipients: string }> } } | null };

type AllArticleModalQueryVariables = Exact<{ [key: string]: never; }>;


type AllArticleModalQuery = { __typename?: 'Query', allArticles: Array<{ __typename?: 'ArticleRecord', slug: string }> };

type ArticleModalQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type ArticleModalQuery = { __typename?: 'Query', article?: { __typename: 'ArticleRecord', id: string, title: string, slug: string, createdAt: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null } | null };

type AllCoachProfileModalQueryVariables = Exact<{ [key: string]: never; }>;


type AllCoachProfileModalQuery = { __typename?: 'Query', allCoaches: Array<{ __typename?: 'CoachRecord', slug: string }> };

type CoachProfileModalQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type CoachProfileModalQuery = { __typename?: 'Query', coach?: { __typename: 'CoachRecord', id: string, name: string, jobTitle: string, jobTitleExtended?: string | null, photoAlignment: string, bioSummary?: string | null, slug: string, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, bio?: { __typename?: 'CoachModelBioField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

type AllFormModalQueryVariables = Exact<{ [key: string]: never; }>;


type AllFormModalQuery = { __typename?: 'Query', allFormModals: Array<{ __typename?: 'FormModalRecord', slug: string }> };

type FormModalQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type FormModalQuery = { __typename?: 'Query', formModal?: { __typename: 'FormModalRecord', id: string, heading?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, intro?: { __typename?: 'FormModalModelIntroField', value: unknown } | null, form: { __typename: 'FormRecord', id: string, formName: string, submitButtonText: string, formFields: Array<{ __typename: 'FormSelectFieldRecord', id: string, label: string, required?: boolean | null, width: string, options: Array<{ __typename?: 'FormSelectOptionRecord', id: string, value: string }> } | { __typename: 'FormTextAreaRecord', id: string, label: string, required?: boolean | null } | { __typename: 'FormTextFieldRecord', id: string, label: string, fieldType: string, isInternational?: boolean | null, width: string, required?: boolean | null }>, successMessage: { __typename?: 'FormModelSuccessMessageField', value: unknown }, onSubmit: Array<{ __typename: 'CreateHubspotContactActionRecord' } | { __typename: 'OpenDocumentActionRecord', document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'SendEmailActionRecord', recipients: string }> } } | null };

type AllNewsletterModalQueryVariables = Exact<{ [key: string]: never; }>;


type AllNewsletterModalQuery = { __typename?: 'Query', allNewsletters: Array<{ __typename?: 'NewsletterRecord', slug: string }> };

type NewsletterModalQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type NewsletterModalQuery = { __typename?: 'Query', newsletter?: { __typename: 'NewsletterRecord', id: string, title: string, slug: string, createdAt: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, body: { __typename?: 'NewsletterModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null } | null };

type AllTeamMemberModalQueryVariables = Exact<{ [key: string]: never; }>;


type AllTeamMemberModalQuery = { __typename?: 'Query', allTeamMembers: Array<{ __typename?: 'TeamMemberRecord', slug: string }> };

type TeamMemberModalQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type TeamMemberModalQuery = { __typename?: 'Query', teamMember?: { __typename: 'TeamMemberRecord', id: string, name: string, jobTitle: string, jobTitleExtended?: string | null, photoAlignment: string, slug: string, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, bio?: { __typename?: 'TeamMemberModelBioField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


type AboutPageQuery = { __typename?: 'Query', aboutPage?: { __typename: 'AboutPageRecord', aboutHeading: string, teamHeading: string, slug: string, servicesHeading: string, id: string, howHeading: string, partnerHeading?: string | null, aboutBody?: { __typename?: 'AboutPageModelAboutBodyField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, services: Array<{ __typename?: 'ServiceRecord', title?: string | null, description?: { __typename?: 'ServiceModelDescriptionField', value: unknown } | null, link: Array<{ __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } }> }>, howBody: { __typename?: 'AboutPageModelHowBodyField', value: unknown }, howDetails: Array<{ __typename?: 'TitleDescriptionRecord', title: string, description: { __typename?: 'TitleDescriptionModelDescriptionField', value: unknown } }>, howLink?: { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, partnerBody?: { __typename?: 'AboutPageModelPartnerBodyField', value: unknown } | null, testimonials: Array<{ __typename: 'TestimonialRecord', id: string, attribution: string, testimonial: { __typename?: 'TestimonialModelTestimonialField', value: unknown }, logo: { __typename?: 'FileField', format: string, url: string, alt?: string | null, width?: number | null, height?: number | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } }> } | null, allTeamMembers: Array<{ __typename: 'TeamMemberRecord', id: string, name: string, jobTitle: string, jobTitleExtended?: string | null, photoAlignment: string, slug: string, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, bio?: { __typename?: 'TeamMemberModelBioField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> }> };

type AdvisorsPageQueryVariables = Exact<{ [key: string]: never; }>;


type AdvisorsPageQuery = { __typename?: 'Query', advisorsPage?: { __typename: 'AdvisorsPageRecord', aboutHeading: string, slug: string, id: string, howHeading: string, partnerHeading?: string | null, logo?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, aboutBody?: { __typename?: 'AdvisorsPageModelAboutBodyField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, howBody: { __typename?: 'AdvisorsPageModelHowBodyField', value: unknown }, howDetails: Array<{ __typename?: 'TitleDescriptionRecord', title: string, description: { __typename?: 'TitleDescriptionModelDescriptionField', value: unknown } }>, howLink?: { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, partnerBody?: { __typename?: 'AdvisorsPageModelPartnerBodyField', value: unknown } | null, testimonials: Array<{ __typename: 'TestimonialRecord', id: string, attribution: string, testimonial: { __typename?: 'TestimonialModelTestimonialField', value: unknown }, logo: { __typename?: 'FileField', format: string, url: string, alt?: string | null, width?: number | null, height?: number | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } }> } | null };

type ArchivePageQueryVariables = Exact<{ [key: string]: never; }>;


type ArchivePageQuery = { __typename?: 'Query', archivePage?: { __typename?: 'ArchivePageRecord', archiveHeading: string, slug: string, archiveBackLink: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null, allBooks: Array<{ __typename: 'BookRecord', title: string, subtitle?: string | null, secondaryCta?: string | null, descriptionHeading?: string | null, miscellaneousInformationHeading?: string | null, slug: string, createdAt: string, thumbnail: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }, authors: Array<{ __typename?: 'AuthorRecord', name: string, title: string, bio: { __typename?: 'AuthorModelBioField', value: unknown }, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } }>, purchaseLink?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | null, descriptionBody?: { __typename?: 'BookModelDescriptionBodyField', value: unknown } | null, descriptionCtaButton?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } } | null, testimonials: Array<{ __typename?: 'BookTestimonialRecord', attributionName: string, quote: { __typename?: 'BookTestimonialModelQuoteField', value: unknown }, attributionTitle?: { __typename?: 'BookTestimonialModelAttributionTitleField', value: unknown } | null }>, miscellaneousInformationBody?: { __typename?: 'BookModelMiscellaneousInformationBodyField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, allVideos: Array<{ __typename: 'VideoRecord', description: string, createdAt: string, file: { __typename?: 'VideoField', url: string, thumbnailUrl: string } }>, allArticles: Array<{ __typename: 'ArticleRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, allNewsletters: Array<{ __typename: 'NewsletterRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'NewsletterModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }> };

type AllArticlePageQueryVariables = Exact<{ [key: string]: never; }>;


type AllArticlePageQuery = { __typename?: 'Query', allArticles: Array<{ __typename?: 'ArticleRecord', slug: string }> };

type ArticlePageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type ArticlePageQuery = { __typename?: 'Query', article?: { __typename: 'ArticleRecord', id: string, title: string, slug: string, createdAt: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null } | null };

type ArticlesPageQueryVariables = Exact<{ [key: string]: never; }>;


type ArticlesPageQuery = { __typename?: 'Query', articlesPage?: { __typename?: 'ArticlesPageRecord', pageHeading?: string | null, slug: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null, articles: Array<{ __typename: 'ArticleRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, newsItems: Array<{ __typename: 'NewsItemRecord', id: string, title: string, publication: string, url?: string | null, createdAt: string }> };

type AllBookPageQueryVariables = Exact<{ [key: string]: never; }>;


type AllBookPageQuery = { __typename?: 'Query', allBooks: Array<{ __typename?: 'BookRecord', slug: string }> };

type BookPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type BookPageQuery = { __typename?: 'Query', book?: { __typename: 'BookRecord', title: string, subtitle?: string | null, secondaryCta?: string | null, descriptionHeading?: string | null, miscellaneousInformationHeading?: string | null, slug: string, createdAt: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, thumbnail: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }, authors: Array<{ __typename?: 'AuthorRecord', name: string, title: string, bio: { __typename?: 'AuthorModelBioField', value: unknown }, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } }>, purchaseLink?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | null, descriptionBody?: { __typename?: 'BookModelDescriptionBodyField', value: unknown } | null, descriptionCtaButton?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } } | null, testimonials: Array<{ __typename?: 'BookTestimonialRecord', attributionName: string, quote: { __typename?: 'BookTestimonialModelQuoteField', value: unknown }, attributionTitle?: { __typename?: 'BookTestimonialModelAttributionTitleField', value: unknown } | null }>, miscellaneousInformationBody?: { __typename?: 'BookModelMiscellaneousInformationBodyField', value: unknown } | null } | null };

type AllCoachCategoryPageQueryVariables = Exact<{ [key: string]: never; }>;


type AllCoachCategoryPageQuery = { __typename?: 'Query', allCoachCategories: Array<{ __typename?: 'CoachCategoryRecord', categorySlug: string }> };

type CoachCategoryPageQueryVariables = Exact<{
  categorySlug: Scalars['String']['input'];
}>;


type CoachCategoryPageQuery = { __typename?: 'Query', coachCategory?: { __typename: 'CoachCategoryRecord', id: string, categoryName: string, categoryNameFull?: string | null, description: string, categorySlug: string, featuredCoach: { __typename: 'CoachRecord', id: string, name: string, jobTitle: string, jobTitleExtended?: string | null, photoAlignment: string, bioSummary?: string | null, slug: string, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, bio?: { __typename?: 'CoachModelBioField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> }, featuredCoaches: Array<{ __typename: 'CoachRecord', id: string, name: string, jobTitle: string, jobTitleExtended?: string | null, photoAlignment: string, bioSummary?: string | null, slug: string, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, bio?: { __typename?: 'CoachModelBioField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> }>, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null, allCoachCategories: Array<{ __typename: 'CoachCategoryRecord', id: string, categoryName: string, categoryNameFull?: string | null, description: string, categorySlug: string }>, coachCategoryCta?: { __typename: 'CoachCategoryCtaRecord', id: string, ctaHeading: string, ctaLinkText?: string | null, ctaBody?: { __typename?: 'CoachCategoryCtaModelCtaBodyField', value: unknown } | null } | null };

type AllCoachesPageQueryVariables = Exact<{ [key: string]: never; }>;


type AllCoachesPageQuery = { __typename?: 'Query', allCoaches: Array<{ __typename: 'CoachRecord', id: string, name: string, jobTitle: string, jobTitleExtended?: string | null, photoAlignment: string, bioSummary?: string | null, slug: string, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, bio?: { __typename?: 'CoachModelBioField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> }>, allCoachCategories: Array<{ __typename: 'CoachCategoryRecord', id: string, categoryName: string, categoryNameFull?: string | null, description: string, categorySlug: string }> };

type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


type ContactPageQuery = { __typename?: 'Query', contactPage?: { __typename?: 'ContactPageRecord', heading?: string | null, intro?: { __typename?: 'ContactPageModelIntroField', value: unknown } | null, form: { __typename: 'FormRecord', id: string, formName: string, submitButtonText: string, formFields: Array<{ __typename: 'FormSelectFieldRecord', id: string, label: string, required?: boolean | null, width: string, options: Array<{ __typename?: 'FormSelectOptionRecord', id: string, value: string }> } | { __typename: 'FormTextAreaRecord', id: string, label: string, required?: boolean | null } | { __typename: 'FormTextFieldRecord', id: string, label: string, fieldType: string, isInternational?: boolean | null, width: string, required?: boolean | null }>, successMessage: { __typename?: 'FormModelSuccessMessageField', value: unknown }, onSubmit: Array<{ __typename: 'CreateHubspotContactActionRecord' } | { __typename: 'OpenDocumentActionRecord', document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'SendEmailActionRecord', recipients: string }> } | { __typename: 'HubspotFormEmbedRecord', id: string, portalId: string, formId: string, region: string }, companiesSection: { __typename: 'CompaniesSectionRecord', id: string, heading?: string | null, companies: Array<{ __typename: 'CompanyRecord', id: string, name: string, icon: { __typename?: 'FileField', format: string, url: string, width?: number | null, height?: number | null, alt?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

type AllFormPagesQueryVariables = Exact<{ [key: string]: never; }>;


type AllFormPagesQuery = { __typename?: 'Query', allFormModals: Array<{ __typename?: 'FormModalRecord', slug: string }> };

type FormPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type FormPageQuery = { __typename?: 'Query', formModal?: { __typename: 'FormModalRecord', id: string, heading?: string | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, intro?: { __typename?: 'FormModalModelIntroField', value: unknown } | null, form: { __typename: 'FormRecord', id: string, formName: string, submitButtonText: string, formFields: Array<{ __typename: 'FormSelectFieldRecord', id: string, label: string, required?: boolean | null, width: string, options: Array<{ __typename?: 'FormSelectOptionRecord', id: string, value: string }> } | { __typename: 'FormTextAreaRecord', id: string, label: string, required?: boolean | null } | { __typename: 'FormTextFieldRecord', id: string, label: string, fieldType: string, isInternational?: boolean | null, width: string, required?: boolean | null }>, successMessage: { __typename?: 'FormModelSuccessMessageField', value: unknown }, onSubmit: Array<{ __typename: 'CreateHubspotContactActionRecord' } | { __typename: 'OpenDocumentActionRecord', document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'SendEmailActionRecord', recipients: string }> } } | null };

type RootLayoutQueryVariables = Exact<{ [key: string]: never; }>;


type RootLayoutQuery = { __typename?: 'Query', alertBar?: { __typename: 'AlertBarRecord', id: string, isActive?: boolean | null, alertText?: { __typename?: 'AlertBarModelAlertTextField', value: unknown } | null, link?: { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } } | { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null } | null, nav?: { __typename: 'NavRecord', id: string, links: Array<{ __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } }>, button?: { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } } | { __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null } | null, allCoachCategories: Array<{ __typename: 'CoachCategoryRecord', id: string, categoryName: string, categoryNameFull?: string | null, description: string, categorySlug: string }> };

type LeadershipPageQueryVariables = Exact<{ [key: string]: never; }>;


type LeadershipPageQuery = { __typename?: 'Query', thoughtLeadershipPage?: { __typename?: 'ThoughtLeadershipPageRecord', featuredVisible?: boolean | null, booksVisible?: boolean | null, newslettersVisible?: boolean | null, videosVisible?: boolean | null, articlesVisible?: boolean | null, coursesVisible?: boolean | null, heroHeadingLine: string, heroLinksLabel?: string | null, featuredHeading: string, booksHeading: string, newslettersLabel: string, newslettersHeading: string, videosHeading: string, articlesHeading: string, coursesHeading: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, heroImage?: { __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null, heroText: { __typename?: 'ThoughtLeadershipPageModelHeroTextField', value: unknown }, heroLinks: Array<{ __typename: 'AnchorLinkRecord', id: string, linkText: string, href: string }>, featuredBody: { __typename: 'ThoughtLeadershipFeaturedItemRecord', id: string, heading: string, body?: { __typename?: 'ThoughtLeadershipFeaturedItemModelBodyField', value: unknown } | null, link?: { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } } | { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } } | null, image?: { __typename?: 'ImageFileField', responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null }, booksArchiveButton?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, booksItems: Array<{ __typename: 'BookRecord', title: string, subtitle?: string | null, secondaryCta?: string | null, descriptionHeading?: string | null, miscellaneousInformationHeading?: string | null, slug: string, createdAt: string, thumbnail: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }, authors: Array<{ __typename?: 'AuthorRecord', name: string, title: string, bio: { __typename?: 'AuthorModelBioField', value: unknown }, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } }>, purchaseLink?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | null, descriptionBody?: { __typename?: 'BookModelDescriptionBodyField', value: unknown } | null, descriptionCtaButton?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } } | null, testimonials: Array<{ __typename?: 'BookTestimonialRecord', attributionName: string, quote: { __typename?: 'BookTestimonialModelQuoteField', value: unknown }, attributionTitle?: { __typename?: 'BookTestimonialModelAttributionTitleField', value: unknown } | null }>, miscellaneousInformationBody?: { __typename?: 'BookModelMiscellaneousInformationBodyField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, newslettersArchiveButton?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, newslettersItem?: { __typename: 'NewsletterRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'NewsletterModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> } | null, videosArchiveButton?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, videosItems: Array<{ __typename: 'VideoRecord', description: string, createdAt: string, file: { __typename?: 'VideoField', url: string, thumbnailUrl: string } }>, articlesArchiveButton?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, articlesItems: Array<{ __typename: 'ArticleRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, coursesImage: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }, coursesDescription: { __typename?: 'ThoughtLeadershipPageModelCoursesDescriptionField', value: unknown }, coursesButton?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, coursesCoaches: Array<{ __typename?: 'CoursesCoachRecord', name: string, title: string, image: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } }> } | null, allBooks: Array<{ __typename: 'BookRecord', title: string, subtitle?: string | null, secondaryCta?: string | null, descriptionHeading?: string | null, miscellaneousInformationHeading?: string | null, slug: string, createdAt: string, thumbnail: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }, authors: Array<{ __typename?: 'AuthorRecord', name: string, title: string, bio: { __typename?: 'AuthorModelBioField', value: unknown }, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } }>, purchaseLink?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | null, descriptionBody?: { __typename?: 'BookModelDescriptionBodyField', value: unknown } | null, descriptionCtaButton?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } } | null, testimonials: Array<{ __typename?: 'BookTestimonialRecord', attributionName: string, quote: { __typename?: 'BookTestimonialModelQuoteField', value: unknown }, attributionTitle?: { __typename?: 'BookTestimonialModelAttributionTitleField', value: unknown } | null }>, miscellaneousInformationBody?: { __typename?: 'BookModelMiscellaneousInformationBodyField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, allVideos: Array<{ __typename: 'VideoRecord', description: string, createdAt: string, file: { __typename?: 'VideoField', url: string, thumbnailUrl: string } }>, allArticles: Array<{ __typename: 'ArticleRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }>, allNewsletters: Array<{ __typename: 'NewsletterRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'NewsletterModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }> };

type AllNewslettersPageQueryVariables = Exact<{ [key: string]: never; }>;


type AllNewslettersPageQuery = { __typename?: 'Query', allNewsletters: Array<{ __typename?: 'NewsletterRecord', slug: string }> };

type NewsletterPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


type NewsletterPageQuery = { __typename?: 'Query', newsletter?: { __typename: 'NewsletterRecord', id: string, title: string, slug: string, createdAt: string, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, body: { __typename?: 'NewsletterModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null } | null };

type AlertBarFragment = { __typename: 'AlertBarRecord', id: string, isActive?: boolean | null, alertText?: { __typename?: 'AlertBarModelAlertTextField', value: unknown } | null, link?: { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } } | { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null };

type ArticleFragment = { __typename: 'ArticleRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> };

type NewsItemFragment = { __typename: 'NewsItemRecord', id: string, title: string, publication: string, url?: string | null, createdAt: string };

type CoachProfileFragment = { __typename: 'CoachRecord', id: string, name: string, jobTitle: string, jobTitleExtended?: string | null, photoAlignment: string, bioSummary?: string | null, slug: string, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, bio?: { __typename?: 'CoachModelBioField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> };

type TeamMemberFragment = { __typename: 'TeamMemberRecord', id: string, name: string, jobTitle: string, jobTitleExtended?: string | null, photoAlignment: string, slug: string, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null }, bio?: { __typename?: 'TeamMemberModelBioField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> };

type ResponsiveImageFragment = { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null };

type FormFragment = { __typename: 'FormRecord', id: string, formName: string, submitButtonText: string, formFields: Array<{ __typename: 'FormSelectFieldRecord', id: string, label: string, required?: boolean | null, width: string, options: Array<{ __typename?: 'FormSelectOptionRecord', id: string, value: string }> } | { __typename: 'FormTextAreaRecord', id: string, label: string, required?: boolean | null } | { __typename: 'FormTextFieldRecord', id: string, label: string, fieldType: string, isInternational?: boolean | null, width: string, required?: boolean | null }>, successMessage: { __typename?: 'FormModelSuccessMessageField', value: unknown }, onSubmit: Array<{ __typename: 'CreateHubspotContactActionRecord' } | { __typename: 'OpenDocumentActionRecord', document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'SendEmailActionRecord', recipients: string }> };

type FormSelectFieldFragment = { __typename?: 'FormSelectFieldRecord', id: string, label: string, required?: boolean | null, width: string, options: Array<{ __typename?: 'FormSelectOptionRecord', id: string, value: string }> };

type FormTextAreaFragment = { __typename?: 'FormTextAreaRecord', id: string, label: string, required?: boolean | null };

type FormTextFieldFragment = { __typename?: 'FormTextFieldRecord', id: string, label: string, fieldType: string, isInternational?: boolean | null, width: string, required?: boolean | null };

type FormModalFragment = { __typename: 'FormModalRecord', id: string, heading?: string | null, intro?: { __typename?: 'FormModalModelIntroField', value: unknown } | null, form: { __typename: 'FormRecord', id: string, formName: string, submitButtonText: string, formFields: Array<{ __typename: 'FormSelectFieldRecord', id: string, label: string, required?: boolean | null, width: string, options: Array<{ __typename?: 'FormSelectOptionRecord', id: string, value: string }> } | { __typename: 'FormTextAreaRecord', id: string, label: string, required?: boolean | null } | { __typename: 'FormTextFieldRecord', id: string, label: string, fieldType: string, isInternational?: boolean | null, width: string, required?: boolean | null }>, successMessage: { __typename?: 'FormModelSuccessMessageField', value: unknown }, onSubmit: Array<{ __typename: 'CreateHubspotContactActionRecord' } | { __typename: 'OpenDocumentActionRecord', document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'SendEmailActionRecord', recipients: string }> } };

type HubspotFormEmbedFragment = { __typename: 'HubspotFormEmbedRecord', id: string, portalId: string, formId: string, region: string };

type HomeCoachesSectionFragment = { __typename: 'HomeCoachesSectionRecord', id: string, heading?: string | null, body?: { __typename?: 'HomeCoachesSectionModelBodyField', value: unknown } | null, cta?: { __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, backgroundImages: Array<{ __typename?: 'ImageFileField', horizontal: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, vertical: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } }> };

type HomeContactFragment = { __typename?: 'HomePageRecord', contactHeading?: string | null, contactBody?: { __typename?: 'HomePageModelContactBodyField', value: unknown } | null, contactLink?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, contactForm: { __typename: 'FormRecord', id: string, formName: string, submitButtonText: string, formFields: Array<{ __typename: 'FormSelectFieldRecord', id: string, label: string, required?: boolean | null, width: string, options: Array<{ __typename?: 'FormSelectOptionRecord', id: string, value: string }> } | { __typename: 'FormTextAreaRecord', id: string, label: string, required?: boolean | null } | { __typename: 'FormTextFieldRecord', id: string, label: string, fieldType: string, isInternational?: boolean | null, width: string, required?: boolean | null }>, successMessage: { __typename?: 'FormModelSuccessMessageField', value: unknown }, onSubmit: Array<{ __typename: 'CreateHubspotContactActionRecord' } | { __typename: 'OpenDocumentActionRecord', document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'SendEmailActionRecord', recipients: string }> } };

type HomeHeroFragment = { __typename?: 'HomePageRecord', heroHeading1: string, heroHeading2: string, heroImages: Array<{ __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }> };

type HomeHeroImagesFragment = { __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null };

type HomeIntroFragment = { __typename?: 'HomePageRecord', introHeading?: string | null };

type HomeMarshallFragment = { __typename?: 'HomePageRecord', marshallHeading?: string | null, marshallBody?: { __typename?: 'HomePageModelMarshallBodyField', value: unknown } | null, marshallCta?: { __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, marshallQuote?: { __typename?: 'QuoteRecord', attribution?: string | null, quote?: { __typename?: 'QuoteModelQuoteField', value: unknown } | null } | null, marshallImage?: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } | null };

type HomePromiseFragment = { __typename?: 'HomePageRecord', promiseHeading: string, promiseBody?: { __typename?: 'HomePageModelPromiseBodyField', value: unknown } | null, promiseCta: { __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } };

type HomeResultsFragment = { __typename?: 'HomePageRecord', resultsHeading?: string | null, resultsBody?: { __typename?: 'HomePageModelResultsBodyField', value: unknown } | null };

type ThoughtLeadershipItemFragment = { __typename: 'ThoughtLeadershipItemRecord', id: string, heading: string, body?: { __typename?: 'ThoughtLeadershipItemModelBodyField', value: unknown } | null, link?: { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } } | { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, image?: { __typename?: 'ImageFileField', responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null };

type CoachCategoryMenuFragment = { __typename: 'CoachCategoryRecord', id: string, categoryName: string, categoryNameFull?: string | null, description: string, categorySlug: string };

type NavFragment = { __typename: 'NavRecord', id: string, links: Array<{ __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } }>, button?: { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } } | { __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null };

type LeaderShipArticlesFragment = { __typename?: 'ThoughtLeadershipPageRecord', articlesHeading: string, articlesArchiveButton?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, articlesItems: Array<{ __typename: 'ArticleRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'ArticleModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }> };

type BookTestimonialFragment = { __typename?: 'BookTestimonialRecord', attributionName: string, quote: { __typename?: 'BookTestimonialModelQuoteField', value: unknown }, attributionTitle?: { __typename?: 'BookTestimonialModelAttributionTitleField', value: unknown } | null };

type BookFragment = { __typename: 'BookRecord', title: string, subtitle?: string | null, secondaryCta?: string | null, descriptionHeading?: string | null, miscellaneousInformationHeading?: string | null, slug: string, createdAt: string, thumbnail: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }, authors: Array<{ __typename?: 'AuthorRecord', name: string, title: string, bio: { __typename?: 'AuthorModelBioField', value: unknown }, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } }>, purchaseLink?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | null, descriptionBody?: { __typename?: 'BookModelDescriptionBodyField', value: unknown } | null, descriptionCtaButton?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } } | null, testimonials: Array<{ __typename?: 'BookTestimonialRecord', attributionName: string, quote: { __typename?: 'BookTestimonialModelQuoteField', value: unknown }, attributionTitle?: { __typename?: 'BookTestimonialModelAttributionTitleField', value: unknown } | null }>, miscellaneousInformationBody?: { __typename?: 'BookModelMiscellaneousInformationBodyField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> };

type LeaderShipBooksFragment = { __typename?: 'ThoughtLeadershipPageRecord', booksHeading: string, booksArchiveButton?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, booksItems: Array<{ __typename: 'BookRecord', title: string, subtitle?: string | null, secondaryCta?: string | null, descriptionHeading?: string | null, miscellaneousInformationHeading?: string | null, slug: string, createdAt: string, thumbnail: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }, authors: Array<{ __typename?: 'AuthorRecord', name: string, title: string, bio: { __typename?: 'AuthorModelBioField', value: unknown }, photo: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } }>, purchaseLink?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | null, descriptionBody?: { __typename?: 'BookModelDescriptionBodyField', value: unknown } | null, descriptionCtaButton?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } } | null, testimonials: Array<{ __typename?: 'BookTestimonialRecord', attributionName: string, quote: { __typename?: 'BookTestimonialModelQuoteField', value: unknown }, attributionTitle?: { __typename?: 'BookTestimonialModelAttributionTitleField', value: unknown } | null }>, miscellaneousInformationBody?: { __typename?: 'BookModelMiscellaneousInformationBodyField', value: unknown } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> }> };

type CoursesCoachFragment = { __typename?: 'CoursesCoachRecord', name: string, title: string, image: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } };

type LeaderShipCoursesFragment = { __typename?: 'ThoughtLeadershipPageRecord', coursesHeading: string, coursesImage: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null }, coursesDescription: { __typename?: 'ThoughtLeadershipPageModelCoursesDescriptionField', value: unknown }, coursesButton?: { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, coursesCoaches: Array<{ __typename?: 'CoursesCoachRecord', name: string, title: string, image: { __typename?: 'FileField', responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } }> };

type PdfFragment = { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } };

type ThoughtLeadershipFeaturedItemFragment = { __typename: 'ThoughtLeadershipFeaturedItemRecord', id: string, heading: string, body?: { __typename?: 'ThoughtLeadershipFeaturedItemModelBodyField', value: unknown } | null, link?: { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } } | { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } } | null, image?: { __typename?: 'ImageFileField', responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null };

type LeaderShipFeaturedFragment = { __typename?: 'ThoughtLeadershipPageRecord', featuredHeading: string, featuredBody: { __typename: 'ThoughtLeadershipFeaturedItemRecord', id: string, heading: string, body?: { __typename?: 'ThoughtLeadershipFeaturedItemModelBodyField', value: unknown } | null, link?: { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } } | { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } } | { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string } | { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | { __typename: 'PdfRecord', id: string, createdAt: string, pdf: { __typename?: 'FileField', url: string } } | null, image?: { __typename?: 'ImageFileField', responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null } };

type LeaderShipHeroFragment = { __typename?: 'ThoughtLeadershipPageRecord', heroHeadingLine: string, heroLinksLabel?: string | null, heroImage?: { __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null } | null, heroText: { __typename?: 'ThoughtLeadershipPageModelHeroTextField', value: unknown }, heroLinks: Array<{ __typename: 'AnchorLinkRecord', id: string, linkText: string, href: string }> };

type LeaderShipHeroImageFragment = { __typename?: 'FileField', horizontal?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, vertical?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null, focalPoint?: { __typename?: 'focalPoint', x: number, y: number } | null };

type NewsletterFragment = { __typename: 'NewsletterRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'NewsletterModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> };

type LeaderShipNewslettersFragment = { __typename?: 'ThoughtLeadershipPageRecord', newslettersLabel: string, newslettersHeading: string, newslettersArchiveButton?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, newslettersItem?: { __typename: 'NewsletterRecord', id: string, title: string, slug: string, createdAt: string, body: { __typename?: 'NewsletterModelBodyField', value: unknown, blocks: Array<{ __typename: 'ImageRecord', id: string, image: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } } }> }, thumbnail?: { __typename?: 'ImageFileField', alt?: string | null, title?: string | null, responsiveImage: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null }, focalPoint: { __typename?: 'focalPoint', x: number, y: number } } | null, _seoMetaTags: Array<{ __typename?: 'Tag', tag: string }> } | null };

type VideoFragment = { __typename: 'VideoRecord', description: string, createdAt: string, file: { __typename?: 'VideoField', url: string, thumbnailUrl: string } };

type LeaderShipVideosFragment = { __typename?: 'ThoughtLeadershipPageRecord', videosHeading: string, videosArchiveButton?: { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null, videosItems: Array<{ __typename: 'VideoRecord', description: string, createdAt: string, file: { __typename?: 'VideoField', url: string, thumbnailUrl: string } }> };

type AnchorLinkFragment = { __typename: 'AnchorLinkRecord', id: string, linkText: string, href: string };

type ArticleLinkFragment = { __typename: 'ArticleLinkRecord', id: string, linkText: string, article: { __typename: 'ArticleRecord', slug: string } };

type CoachMenuLinkFragment = { __typename: 'CoachMenuLinkRecord', id: string, linkText: string };

type DocumentLinkFragment = { __typename: 'DocumentLinkRecord', id: string, linkText: string, document: { __typename?: 'FileField', filename: string, id: string, url: string } };

type ExternalLinkFragment = { __typename: 'ExternalLinkRecord', id: string, url: string, linkText: string };

type FormLinkFragment = { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } };

type PageLinkFragment = { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } };

type AboutHowFragment = { __typename: 'AboutPageRecord', id: string, howHeading: string, howBody: { __typename?: 'AboutPageModelHowBodyField', value: unknown }, howDetails: Array<{ __typename?: 'TitleDescriptionRecord', title: string, description: { __typename?: 'TitleDescriptionModelDescriptionField', value: unknown } }>, howLink?: { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null };

type AdvisorsHowFragment = { __typename: 'AdvisorsPageRecord', id: string, howHeading: string, howBody: { __typename?: 'AdvisorsPageModelHowBodyField', value: unknown }, howDetails: Array<{ __typename?: 'TitleDescriptionRecord', title: string, description: { __typename?: 'TitleDescriptionModelDescriptionField', value: unknown } }>, howLink?: { __typename: 'FormLinkRecord', id: string, linkText: string, form: { __typename: 'FormModalRecord', slug: string } } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } } | null };

type AboutPartnerFragment = { __typename: 'AboutPageRecord', id: string, partnerHeading?: string | null, partnerBody?: { __typename?: 'AboutPageModelPartnerBodyField', value: unknown } | null, testimonials: Array<{ __typename: 'TestimonialRecord', id: string, attribution: string, testimonial: { __typename?: 'TestimonialModelTestimonialField', value: unknown }, logo: { __typename?: 'FileField', format: string, url: string, alt?: string | null, width?: number | null, height?: number | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } }> };

type AdvisorsPartnerFragment = { __typename: 'AdvisorsPageRecord', id: string, partnerHeading?: string | null, partnerBody?: { __typename?: 'AdvisorsPageModelPartnerBodyField', value: unknown } | null, testimonials: Array<{ __typename: 'TestimonialRecord', id: string, attribution: string, testimonial: { __typename?: 'TestimonialModelTestimonialField', value: unknown }, logo: { __typename?: 'FileField', format: string, url: string, alt?: string | null, width?: number | null, height?: number | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } }> };

type AboutServicesFragment = { __typename?: 'AboutPageRecord', servicesHeading: string, services: Array<{ __typename?: 'ServiceRecord', title?: string | null, description?: { __typename?: 'ServiceModelDescriptionField', value: unknown } | null, link: Array<{ __typename: 'CoachMenuLinkRecord', id: string, linkText: string } | { __typename: 'PageLinkRecord', id: string, linkText: string, page: { __typename: 'AboutPageRecord', slug: string } | { __typename: 'ArchivePageRecord', slug: string } | { __typename: 'ArticlesPageRecord', slug: string } | { __typename: 'CoachCategoryRecord', slug: string } | { __typename: 'ContactPageRecord', slug: string } | { __typename: 'HomePageRecord' } | { __typename: 'ThoughtLeadershipPageRecord', slug: string } }> }> };

type CoachCategoryCtaFragment = { __typename: 'CoachCategoryCtaRecord', id: string, ctaHeading: string, ctaLinkText?: string | null, ctaBody?: { __typename?: 'CoachCategoryCtaModelCtaBodyField', value: unknown } | null };

type CompaniesSectionFragment = { __typename: 'CompaniesSectionRecord', id: string, heading?: string | null, companies: Array<{ __typename: 'CompanyRecord', id: string, name: string, icon: { __typename?: 'FileField', format: string, url: string, width?: number | null, height?: number | null, alt?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } }> };

type CompanyFragment = { __typename: 'CompanyRecord', id: string, name: string, icon: { __typename?: 'FileField', format: string, url: string, width?: number | null, height?: number | null, alt?: string | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } };

type TestimonialFragment = { __typename: 'TestimonialRecord', id: string, attribution: string, testimonial: { __typename?: 'TestimonialModelTestimonialField', value: unknown }, logo: { __typename?: 'FileField', format: string, url: string, alt?: string | null, width?: number | null, height?: number | null, responsiveImage?: { __typename: 'ResponsiveImage', sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, base64?: string | null } | null } };

}