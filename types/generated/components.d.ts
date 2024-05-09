import type { Schema, Attribute } from '@strapi/strapi';

export interface AdAdvertisment1 extends Schema.Component {
  collectionName: 'components_ad_advertisment1s';
  info: {
    displayName: 'advertisment';
    icon: '';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    link: Attribute.String;
  };
}

export interface TopstoriesStory extends Schema.Component {
  collectionName: 'components_topstories_stories';
  info: {
    displayName: 'story';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ad.advertisment1': AdAdvertisment1;
      'topstories.story': TopstoriesStory;
    }
  }
}
