import React,{Component} from 'react';

class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }

      handleSubmit(event){
          //repess wima walakwima
          event.preventDefault();
          //console ake link akeii descriptios akeiii print karama consola ake labena widiya

         // console.log(event.target.elements.link.value)
         // console.log(event.target.elements.description.value)

          const imageLink= event.target.elements.link.value
         const description= event.target.elements.description.value

         const post={
             id:0,
             description: description,
             imageLink:imageLink
         }

         //dekama true unoth withrak button aken add wennna 
         if(description &&imageLink){
             this.props.onAddPhoto(post)

         }

      }

    render(){
        return(
           <div>
               <h1>Photopost</h1>
               <div className="form">
               <form onSubmit={this.handleSubmit} >
                   <input type="text" placeholder="Link" name="link"/>
                   <input type="text" placeholder="Descriptions" name="description"/>
                   <button>Post</button>
               </form>
               </div>
           </div>


        );

    }
}
export default AddPhoto;