import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Record } from "../types/record";

export const api = createApi({
	reducerPath: "recordsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
	tagTypes: ["Records"],
	endpoints: (build) => ({
		getAllRecords: build.query<Record[], void>({
			query: () => "/records",
			providesTags: ["Records"],
		}),
		createRecord: build.mutation<Record, Record>({
			query: (record) => ({
				url: "/records",
				method: "POST",
				body: record,
			}),
			invalidatesTags: ["Records"],
		}),
		updateRecord: build.mutation<Record, Record>({
			query: (record) => ({
				url: `/records/${record.id}`,
				method: "PUT",
				body: record,
			}),
			invalidatesTags: ["Records"],
		}),
		deleteRecord: build.mutation<Record, Record>({
			query: (record) => ({
				url: `/records/${record.id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Records"],
		}),
	}),
});

export const {
	useCreateRecordMutation,
	useDeleteRecordMutation,
	useGetAllRecordsQuery,
	useUpdateRecordMutation,
} = api;
