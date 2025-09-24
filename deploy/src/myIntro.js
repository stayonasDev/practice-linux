  
  const fetcher = (url) => fetch(url).then((r) => r.json());

  export default function myIntro(){
    const {data, error, isLoading} = useSWR(' https://raw.githubusercontent.com/stayonasDev/practice-linux/refs/heads/main/deploy/service/resume_general_info_service.json',
         fetcher);

         if(isLoading) return <div>Loading...</div>;
         if(error) return <div>Failed to load</div>;

         return (
    
            {data.map((post: {id : string; title : string}) => (
                <div key={post.id}>{post.title}</div>
            ))}
         )
  }