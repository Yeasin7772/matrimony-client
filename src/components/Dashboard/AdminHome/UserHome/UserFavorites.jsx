import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Button, Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
// import { useEffect, useState } from "react";
const TABLE_HEAD = ["ID", "Name", "Email", "Action"];
const UserFavorites = () => {
    const axiosPublic = useAxiosPublic();
    // const [findData, setFindData]= useState()
    const { user } = useAuth();
    
    // useEffect(()=>{
    //     axiosPublic.get('/favorites')
    //     .then(res => {
    //         console.log('dadaddadad',res.data);
    //         const userData = res.data
            
    //         const useAllData = userData.filter(item => item?.email === user?.email)
    //         setFindData(useAllData)
    //     })
    // },[])
    // console.log(findData);
    
    const { data: favorites = [], refetch } = useQuery({
      queryKey: ['favorites', user?.email],
      queryFn: async () => {
        try {
          const res = await axiosPublic.get('/favorites');
          const userData = res.data;
          const findData = userData.filter(item => item.email === user?.email);
          console.log(findData);
          // Provide a default value (e.g., null) if findData is undefined
          return findData !== undefined ? findData : null;
        } catch (error) {
          // Handle error if needed
          console.error('Error fetching favorites:', error);
          throw error;
        }
      },
    });
    

    const handelDeleted = (id) => {

        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/favorites/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your favorites items has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });


    }
    return (
        <div>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {favorites?.map(({ _id, name, email, occupation, biodataId }, index) => (
                            <tr key={name} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {biodataId}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {email}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Button onClick={() => handelDeleted(_id)}>
                                        deleted
                                    </Button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default UserFavorites;