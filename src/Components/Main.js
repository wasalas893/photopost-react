import React,{Component} from 'react';

import Title from './Title';

import Photowall from './PhotoWall';

import AddPhoto from './AddPhoto';

import {Route} from 'react-router-dom';

//main
class Main extends Component{

    //constor
   constructor(){
       super()
       this.state={
           posts: [{
            id: "0",
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
            }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
            "08323785_735653395_n.jpg"
            }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }],
            screen :'photos' //photos, addphotos
       }
       //butto click karama wenna oni dwal methanth daiii
       this.removePhoto=this.removePhoto.bind(this);
     
       
   }
   //removephoto buttonta adela ake
   removePhoto(postRemoved){
       console.log(postRemoved.description)
       this.setState((state)=>({
           posts: state.posts.filter(post=> post !==postRemoved )

       }))
   } 
 //addpho seen ake

 addphoto(postSubmitted){
     this.setState(state=>({
         posts: state.posts.concat([postSubmitted])
     }))
 }



   componentDidMount(){
       
   }


  componentDidUpdate(prevProps,prevState){
    
    console.log(prevState.posts)
    console.log(this.state)
}




    render(){

      
        return (<div>

            <Route exact path="/" render={()=>(

                    <div>
                     <Title title={'Photopost'}/>

                    <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
                   </div>

            )}/>

            <Route path="/AddPhoto" render={({history})=>(
                <AddPhoto onAddPhoto={(addedPost)=>{
                    //addphoto clic karadddimethanata adata pass weiii
                    //console.log(addedPost)

                    this.addphoto(addedPost)
                    //instory aken mull page aketa data tika apsss weiiii pennaiii
                    history.push('/')
                }}/>
            )}/>  
                     
                  
                    
                    
          

             
             
        </div>)
    }
}



export default Main;