export interface IPaginated<T> {
  items: T[];
  count: number;
  hasNextPage: boolean;
}
