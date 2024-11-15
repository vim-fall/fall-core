import type { Denops } from "@denops/std";
import type { Promish } from "./_typeutil.ts";
import type { Detail, DetailUnit, IdItem } from "./item.ts";

/**
 * Parameters for sorting items.
 */
export type SortParams<T extends Detail> = {
  /**
   * Array of items to sort.
   */
  readonly items: IdItem<T>[];
};

/**
 * Sorter that arranges items in order.
 */
export type Sorter<T extends Detail = DetailUnit> = {
  /**
   * Sorts items in place.
   *
   * @param denops - The Denops instance.
   * @param params - Parameters specifying the items to sort.
   * @param options - Options, including an abort signal.
   * @returns Resolves when sorting is complete.
   */
  sort(
    denops: Denops,
    params: SortParams<T>,
    options: { signal?: AbortSignal },
  ): Promish<void>;
};
