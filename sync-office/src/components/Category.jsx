import React from 'react'
import { useState } from 'react'

let deg_data =[
  {
  "id": "c20fec36-4554-4e6e-a5ac-5987aba192e4",
  "designation": "Investor Security Engineer",
  "description": "Totam maiores quis odit exercitationem. Quas illum quod veniam inventore ullam velit modi magni aliquid. Pariatur quis iure deserunt repudiandae cum.",
  "date": "2023-05-22T16:29:03.163Z"
  },
  {
  "id": "dd32b461-f04c-430f-b7f4-244e2d4a7e28",
  "designation": "Future Program Facilitator",
  "description": "Asperiores dicta dicta rem molestiae. Sit delectus aliquam ex excepturi repellendus. Libero numquam eaque labore nihil officiis cum error doloribus.",
  "date": "2023-05-23T07:41:22.823Z"
  },
  {
  "id": "ffb00892-e40c-4113-aa0e-7c01f71d598d",
  "designation": "Global Branding Producer",
  "description": "Esse voluptate optio provident expedita velit dolores exercitationem quas in. Ex quod corporis beatae veritatis quis sapiente ratione. Placeat quisquam quam.",
  "date": "2023-05-22T15:07:30.304Z"
  },
  {
  "id": "430d541a-a2dc-4538-afe4-da9338736941",
  "designation": "Direct Group Consultant",
  "description": "Officia laborum nulla. Eligendi doloribus itaque eius quam a. Sapiente enim assumenda architecto veniam nisi excepturi laboriosam.",
  "date": "2023-05-22T20:42:49.073Z"
  },
  {
  "id": "ac6ca08c-a2fc-485d-b3c0-c08e73deba2b",
  "designation": "Future Brand Architect",
  "description": "Cupiditate libero voluptatibus quas ut voluptates ipsa. Omnis a voluptatem alias eveniet. Et id saepe officia.",
  "date": "2023-05-23T02:39:51.240Z"
  },
  {
  "id": "ac4e9ce7-a7a6-4e57-8a21-2454918dd1a5",
  "designation": "Senior Marketing Developer",
  "description": "Architecto sapiente maxime ullam voluptatum. Natus repudiandae assumenda earum ex dolore fugiat hic officia ut. Iusto animi delectus eveniet tempore eaque excepturi quisquam.",
  "date": "2023-05-23T06:54:59.872Z"
  },
  {
  "id": "4c2863a3-bdae-414a-a8ea-0684ab4f95ba",
  "designation": "Forward Mobility Officer",
  "description": "Dignissimos nihil error asperiores. Eveniet odit exercitationem eius vitae quia eius temporibus alias animi. Exercitationem autem error facere libero eos velit nisi.",
  "date": "2023-05-22T12:35:37.748Z"
  },
  {
  "id": "2a0f37eb-cdb2-4256-b72b-be3c1def2196",
  "designation": "Forward Division Developer",
  "description": "Tempore eligendi non cumque delectus maxime illo libero nam unde. Saepe officia nam aut magni temporibus reprehenderit atque ad dolorem. Dolorum labore inventore temporibus libero.",
  "date": "2023-05-23T03:49:56.651Z"
  },
  {
  "id": "e5aa739a-7dd8-49d6-8fee-6c8aae02a6d4",
  "designation": "Corporate Markets Planner",
  "description": "Corrupti quibusdam occaecati id recusandae reiciendis natus. Odit officiis fugiat sunt vel tempore enim velit quasi. Aspernatur quasi dolore.",
  "date": "2023-05-23T03:31:21.935Z"
  },
  {
  "id": "88de7068-02e0-4ce9-8ae9-1e5e5e851238",
  "designation": "Forward Configuration Producer",
  "description": "Unde blanditiis ipsum laudantium fugit hic in alias ipsam. Voluptates quisquam accusamus deserunt et ad. Harum fugiat libero consequatur fugit incidunt accusamus.",
  "date": "2023-05-22T14:17:43.490Z"
  }
  ]
let dep_data = [
  {
  "id": "b9936a25-22e1-4126-a8b2-84791816f146",
  "department": "Markets",
  "description": "Porro incidunt tempora ipsam exercitationem sunt consectetur sint. Eaque vero ut quod amet dolorem voluptatem. Saepe nam odio mollitia consequuntur.",
  "date": "2023-05-23T06:58:19.497Z"
  },
  {
  "id": "2aa7b89d-dd88-4bc9-b907-972d4dc050f8",
  "department": "Research",
  "description": "Quibusdam similique praesentium cum in occaecati. Impedit at fuga expedita beatae natus. Itaque rerum consequatur.",
  "date": "2023-05-22T22:04:18.530Z"
  },
  {
  "id": "7db2dcf3-a70b-47ab-b959-42d7c1edbbc8",
  "department": "Program",
  "description": "Expedita magnam officia suscipit occaecati. Odit dolore quae a. Labore sit commodi.",
  "date": "2023-05-23T01:20:50.141Z"
  },
  {
  "id": "b064ecb8-af65-4722-8329-8dc0b0aec5e9",
  "department": "Quality",
  "description": "Doloribus maxime inventore odit unde occaecati explicabo. Architecto molestiae ea repudiandae. Dolor odit laboriosam ad alias ducimus quibusdam sunt nesciunt nulla.",
  "date": "2023-05-23T03:16:44.859Z"
  },
  {
  "id": "22404f08-f118-4843-9e02-d1a50c4586c5",
  "department": "Intranet",
  "description": "Et repellat impedit iusto recusandae et dolorem libero blanditiis. Iure a quos quidem ipsa harum nisi adipisci. Tempore unde blanditiis quo non deserunt qui quas sint.",
  "date": "2023-05-22T18:24:19.761Z"
  },
  {
  "id": "8e6ec694-d653-4bf0-8350-f246ded467a3",
  "department": "Program",
  "description": "Sint necessitatibus quisquam non rerum vero. Esse dicta commodi delectus. Minus ducimus quidem mollitia.",
  "date": "2023-05-23T01:07:27.398Z"
  },
  {
  "id": "61a3c0bd-b5e2-4ec7-aeee-d0cb1568212c",
  "department": "Directives",
  "description": "Labore exercitationem repudiandae consequuntur vel suscipit neque recusandae. Quas delectus eaque doloremque ab ratione maiores. Ex totam iusto aliquid inventore eum ipsa excepturi.",
  "date": "2023-05-22T21:41:28.898Z"
  },
  {
  "id": "8033dacb-ea8f-42e5-8cf0-38bdcee183ad",
  "department": "Usability",
  "description": "Architecto architecto impedit sit recusandae provident quisquam dolore earum atque. Hic corrupti tempora. Veniam voluptates ullam nesciunt repellendus nostrum pariatur voluptatibus.",
  "date": "2023-05-23T05:05:53.302Z"
  },
  {
  "id": "bc082c31-6582-4b80-a863-2c17d9287844",
  "department": "Metrics",
  "description": "Harum id quos. Fugit praesentium necessitatibus possimus necessitatibus id corrupti. Delectus itaque blanditiis blanditiis iste explicabo ut optio exercitationem.",
  "date": "2023-05-22T14:01:53.216Z"
  },
  {
  "id": "2dee2d54-5a2c-4127-b339-48ef98ef632e",
  "department": "Solutions",
  "description": "Facilis maiores veniam. Odio quas ipsa. Ratione ex veniam repellendus dolorum iste officia illum.",
  "date": "2023-05-22T19:28:30.409Z"
  }
  ]


function Category() {
  const [curr_data, setData] = useState([...dep_data])
  const [c_type,setType]=useState(0)
  const handleDep =()=>{
    setData([...dep_data])
    setType(0)
  }

  const handleDeg =()=>{
    setData([...deg_data])
    setType(1)
  }

  return (
    <div className='container'>
       <div className='d-flex justify-content-start my-5 my-border py-3'>
            <button className={ c_type==0 ? "btn text-primary border mx-3":"btn mx-3"}  onClick={handleDep}>Department</button>
            <button className={ c_type==1 ? "btn text-primary border mx-3":"btn mx-3"} onClick={handleDeg}>Designation</button>

       </div>
       <div className='row d-flex justify-content-between'>
              {
                curr_data.map((data)=>{
                  return (
                    <div className="card my-4 bg-light mx-5"style={{width: "18rem"}}>
 
                      <div className="card-body">
                       
                          {c_type === 0 ?  <h5 className="card-title">{data.department}</h5> : <h5 className="card-title">{data.designation}</h5>}
                       
                        <p className="card-text">{data.description}</p>
                        <h6 className="font-weight-bold">{data.date}</h6>
                      </div>
                    </div>
                  )
                })
              }
       </div>
    </div>
  )
}

export default Category