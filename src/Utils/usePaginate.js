import { useMemo } from "react";

export const usePagination = ({ totalCount, pageSize, currentPage }) => {
  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize); //20 (when items/page = 10) (200/10)

    if (totalPageCount <= 6) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1); //4 if currentPage == 5
    const rightSiblingIndex = Math.min(currentPage + 1, totalPageCount); //6 if currentPage == 5

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftRange = range(1, 5);
      return [...leftRange, "...", totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightRange = range(totalPageCount - 4, totalPageCount);
      return [1, "...", ...rightRange]; // 1 --> (firstpageindex)
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, "...", ...middleRange, "...", totalPageCount]; // 1 --> (firstpageindex)
    }
  }, [totalCount, pageSize, currentPage]);

  return paginationRange;
};
