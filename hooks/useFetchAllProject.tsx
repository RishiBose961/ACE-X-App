import CheckEnvironment from '@/app/CheckEnvironment/CheckEnvironment';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { Text, View } from 'react-native'

export default function useFetchAllProject() {
    const [page, setPage] = useState(1);
    const limit = 4;
    const { base_url } = CheckEnvironment();
    const {
        isPending,
        error,
        isError,
        data: fetchProjectAll,
      } = useQuery({
        queryKey: ["fetchProjectAlls",page, limit],
        queryFn: async () => {
          return await fetch(`${base_url}/api/getall-project?page=${page}&limit=${limit}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => res.json());
        },
        placeholderData: keepPreviousData,
      });
    
      const handleNextPage = () => setPage((prev) => prev + 1);
      const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));


      
        if (isError) {
          return (
            <View>
              <Text>Error: {error.message}</Text>
            </View>
          );
        }
      
        // Generate page numbers dynamically
        const totalPages = fetchProjectAll?.totalPages || 1;
        const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  
      
      return { isPending, fetchProjectAll: fetchProjectAll?.data,page,totalPages, pageNumbers,handleNextPage, handlePreviousPage};
}

