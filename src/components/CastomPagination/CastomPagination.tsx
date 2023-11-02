"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Pagination from "react-js-pagination";

import './CastomPagination.scss';

const CustomPagination = (
  { resPerPage, productsCount, offset } : { resPerPage: any, productsCount: any, offset: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  let page = searchParams.get("offset") || 1;

  const pageAmount = Math.ceil(productsCount / resPerPage);

  if (pageAmount < Number(offset)) {
    page = 1;
  } else {
    page = Number(page);
  }


  let queryParams;

  const handlePageChange = (currentPage: any) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("offset")) {
        queryParams.set("offset", currentPage);
      } else {
        queryParams.append("offset", currentPage);
      }

      const path = window.location.pathname + "?" + queryParams.toString();
      router.push(path);
    }
  };

  return (
    <div className="flex mt-20 justify-center">
      <Pagination
        hideFirstLastPages={true}
        activePage={page}
        itemsCountPerPage={resPerPage}
        totalItemsCount={productsCount}
        onChange={handlePageChange}
        nextPageText={""}
        prevPageText={""}
        innerClass='pagination'
        itemClass='pagination__list-item'
        activeClass='pagination__list-item--active'
        linkClass='pagination__link'
        activeLinkClass='pagination__link--active'
        itemClassPrev='pagination__prev-item'
        itemClassNext='pagination__next-item'
      />
    </div>
  );
};

export default CustomPagination;
