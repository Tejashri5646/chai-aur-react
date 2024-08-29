
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/tejashri5646')
    //     .then(response=> response.json()).then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <>
    <div className="text-center m-4 bg-gray-600 text-whitep-4 text-3xl">Github followers: {data.followers}</div>
    <img className="" src={data.avatar_url} alt="" />
    </>
)
}

export default Github
export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/tejashri5646')
    return response.json();
}