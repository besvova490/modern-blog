<script setup lang="ts">
import { computed, h } from 'vue';
import type { ColumnDef } from '@tanstack/vue-table';

// components
import { Table } from '@/shared/table';

// composables
import { useFetchMyComments } from '@/composables/fetcher/useFetchMyComments';

// helpers
import type { IComment } from '@/types/api';
import { pathToUrl } from '@/lib/path-to-url';
import { ROUTER_PATHS } from '@/router/router-path.constants';

const { data } = useFetchMyComments();
const TABLE_COLUMNS: ColumnDef<IComment>[] = [
  {
    header: 'Post',
    accessorKey: 'blogPost.title',
    cell: ({ row }) => {
      return h('a', {
        href: pathToUrl(ROUTER_PATHS.POST.SINGLE.path, { slug: row.original.blogPost.slug }),
        target: '_blank',
        class: 'text-muted-foreground underline',
      }, row.original.blogPost.title);
    },
  },
  {
    header: 'Comment',
    accessorKey: 'content',
  },
  {
    header: 'Is Reply',
    accessorKey: 'isReply',
    cell: ({ row }) => {
      return row.original.parentId ? 'Yes' : 'No';
    },
  },
  {
    header: 'Created At',
    accessorKey: 'createdAt',
  },
];
</script>

<template>
  <Table :columns="TABLE_COLUMNS as any" :data="computed(() => data ?? []) as any" />
</template>
