import { useEffect, useState } from "react"
import api from "../services/api"
import Header from "../../components/Header"
import Card from "../../components/Card"
import { Container } from "./styles"

function Home(){
    const [docs,setDocs]=useState([])
    const [filterDocs,setFilterDocs]=useState([])


    useEffect(()=>{
     
        async function loadData(){
            const {data:{docs}}=await api.get('movie')
            setDocs(docs)
            setFilterDocs(docs)
        }

        loadData()
    },[])
    return(
        <Container>
            <Header docs={docs} setFilterDocs={setFilterDocs} />
            <Card data={filterDocs}/>
        </Container>
    )
}

export default Home