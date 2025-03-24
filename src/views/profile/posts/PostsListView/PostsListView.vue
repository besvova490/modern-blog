<script setup lang="ts">
import { computed, h } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import type { ColumnDef } from '@tanstack/vue-table';

// components
import { Button } from '@/shared/button';
import { Table } from '@/shared/table';
import PostsListViewActions from './PostsListViewActions.vue';

// helpers
import { useFetchPosts } from '@/composables/fetcher/useFetchPosts';
import { useUserProfileStore } from '@/stores/user-profile';
import type { IPost } from '@/types/api';
import { dayjs } from '@/lib/dayjs';
import { ROUTER_PATHS } from '@/router/router-path.constants';
import { pathToUrl } from '@/lib/path-to-url';
import { BlogPostStatus } from '@/enums/blog-post-status.enum';

const userProfileStore = useUserProfileStore();
const { data: user } = storeToRefs(userProfileStore);
const { data } = useFetchPosts({
  authorId: computed(() => user.value?.id).value,
  status: [BlogPostStatus.PUBLISHED, BlogPostStatus.DRAFT, BlogPostStatus.ARCHIVED],
});

const router = useRouter();

const TABLE_COLUMNS: ColumnDef<IPost>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => row.original.categories.map(category => category.name).join(', '),
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => dayjs(row.original.createdAt).format('DD/MM/YYYY HH:mm'),
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
    cell: ({ row }) => dayjs(row.original.updatedAt).format('DD/MM/YYYY HH:mm'),
  },
  {
    // accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return h('div', { class: 'flex items-center gao-2' }, [
        h(PostsListViewActions, {
          onEdit: () => router.push(pathToUrl(ROUTER_PATHS.PROFILE.ACTIVITY.MY_POSTS.SINGLE.path, { slug: row.original.slug })),
          onDelete: () => console.log('delete', row.original.slug),
        }),
      ]);
    }
  },
];
</script>

<template>
  <Button variant="outline" class="w-max ml-auto" :to="ROUTER_PATHS.PROFILE.ACTIVITY.MY_POSTS.CREATE.path">
    Add Post
  </Button>
  <Table
    :columns="TABLE_COLUMNS as any"
    :data="computed(() => data?.items ?? []) as any"
  />
</template>
