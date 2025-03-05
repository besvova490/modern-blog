<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-vue-next';

// components
import { SubscribeForm } from '@/components/forms/subscribe-form';

// helpers
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { dayjs } from '@/lib/dayjs';


const FOOTER_SECTIONS = [
  {
    title: 'ModernBlog',
    description: 'ModernBlog is a blog platform that allows you to create and share your blog posts with others.',
    socialLinks: [
      {
        icon: Facebook,
        label: 'Facebook',
        href: 'https://www.facebook.com',
      },
      {
        icon: Instagram,
        href: 'https://www.instagram.com',  
      },
      {
        icon: Twitter,
        href: 'https://www.twitter.com',
      },
      {
        icon: Linkedin,
        href: 'https://www.linkedin.com',
      }
    ],
  },
  {
    title: 'Categories',
    links: [
      {
        label: 'Technology',
        to: ROUTER_PATHS.CATEGORIES.SINGLE.path,
      },
      {
        label: 'Science',
        to: ROUTER_PATHS.CATEGORIES.SINGLE.path,
      },
      {
        label: 'Business',
        to: ROUTER_PATHS.CATEGORIES.SINGLE.path,
      },
      {
        label: 'Health',
        to: ROUTER_PATHS.CATEGORIES.SINGLE.path,
      },
    ] 
  },
  {
    title: 'Quick Links',
    links: [
      {
        label: 'About Us',
        to: ROUTER_PATHS.STATIC_PAGES.ABOUT.path,
      },
      {
        label: 'Contact Us',
        to: ROUTER_PATHS.STATIC_PAGES.CONTACT.path,
      },
      {
        label: 'Terms of Service',
        to: ROUTER_PATHS.STATIC_PAGES.TERMS_OF_SERVICE.path,
      },
      {
        label: 'Privacy Policy',
        to: ROUTER_PATHS.STATIC_PAGES.PRIVACY_POLICY.path,
      },
      {
        label: 'FAQ',
        to: ROUTER_PATHS.STATIC_PAGES.FAQ.path,
      },
    ]
  },
  {
    title: 'Subscribe',
    description: 'Subscribe to our newsletter to get the latest news and updates.',
  }
];
</script>

<template>
  <footer class="py-12 px-4 bg-muted">
    <div class="grid grid-cols-4 justify-between gap-4 container mx-auto">
      <div v-for="section in FOOTER_SECTIONS" :key="section.title" class="flex flex-col gap-2">
        <template v-if="section.title !== 'Subscribe'">
          <h3 class="text-lg font-bold">
            {{ section.title }}
          </h3>
          <p class="text-sm text-muted-foreground">
            {{ section.description }}
          </p>
          <ul class="flex flex-col gap-2" v-if="section.links">
            <li v-for="link in section.links" :key="link.label">
              <RouterLink :to="link.to" class="text-muted-foreground">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
          <ul class="flex items-center gap-2" v-if="section.socialLinks">
            <li v-for="link in section.socialLinks" :key="link.label">
              <a :href="link.href" class="text-muted-foreground">
                <component :is="link.icon" />
              </a>
            </li>
          </ul>
        </template>
        <SubscribeForm v-else class="border-none !bg-transparent p-0"/>
      </div>
    </div>
    <p class="text-xs text-muted-foreground text-center mt-16">
      &copy; {{ dayjs().year() }} ModernBlog. All rights reserved.
    </p>
  </footer>
</template>
