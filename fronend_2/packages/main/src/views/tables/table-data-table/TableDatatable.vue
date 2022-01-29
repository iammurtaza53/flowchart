<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">

        <BaseCard heading="Table Datatable - Search">
          <DatatablesSearch></DatatablesSearch>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TableDatatable",

  data: () => ({
    page: {
      title: "Table Datatable",
    },
    breadcrumbs: [
      {
        text: "Tables",
        disabled: false,
        to: "#",
      },
      {
        text: "Table Datatable",
        disabled: true,
      },
    ],
  }),
  components: {
    // DatatablesSelectableRows: () =>
    //   import("./table-data/DatatablesSelectableRows"),
    // DatatablesGroupedRows: () => import("./table-data/DatatablesGroupedRows"),
    // DatatablesSortonMultipleColumns: () =>
    //   import("./table-data/DatatablesSortonMultipleColumns"),
    DatatablesSearch: () => import("./table-data/DatatablesSearch"),
    // DatatablesRemoveDefaultHeaderFooter: () =>
    //   import("./table-data/DatatablesRemoveDefaultHeaderFooter"),
    // DatatablesLoadingState: () => import("./table-data/DatatablesLoadingState"),
    // DatatablesDense: () => import("./table-data/DatatablesDense"),
    // DatatablesFooterProps: () => import("./table-data/DatatablesFooterProps"),
    // DatatablesFilterableColumns: () =>
    //   import("./table-data/DatatablesFilterableColumns"),
    // DatatablesSlots: () => import("./table-data/DatatablesSlots"),
    // DatatablesSimpleCheckbox: () =>
    //   import("./table-data/DatatablesSimpleCheckbox"),
    // DatatablesExpandableRows: () =>
    //   import("./table-data/DatatablesExpandableRows"),
    // DatatablesCustomFiltering: () =>
    //   import("./table-data/DatatablesCustomFiltering"),
    // DatatablesCustomizingDefaultHeader: () =>
    //   import("./table-data/DatatablesCustomizingDefaultHeader"),
    // DatatablesCustomizingDefaultRows: () =>
    //   import("./table-data/DatatablesCustomizingDefaultRows"),
    // DatatablesExternalPagination: () =>
    //   import("./table-data/DatatablesExternalPagination"),
    // DatatablesExternalSorting: () =>
    //   import("./table-data/DatatablesExternalSorting"),
    // DatatablesPaginateSortServerside: () =>
    //   import("./table-data/DatatablesPaginateSortServerside"),
    // DatatablesContentEditing: () =>
    //   import("./table-data/DatatablesContentEditing"),
    // DatatablesCRUDActions: () => import("./table-data/DatatablesCRUDActions"),
  },
};
</script>
