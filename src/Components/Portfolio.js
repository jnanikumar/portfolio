import React,{useState} from "react";
import {Modal,ModalHeader,ModalFooter,ModalBody,Button} from 'reactstrap';
import {Model} from "./Model"









const Portfolio = ({ data }) => {

  // const [val,setVal]=useState(false)
  const  [modal, setModal] = useState(false);
    
  const toggle = () => setModal(!modal);

  
  

  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      // const name={image:projectImage,val:val}
      return (
        <div key={projects.title} className="columns portfolio-item" >
          <div className="item-wrap">
            <div title={projects.title}>
              <div>
              <img alt={projects.title} src={projectImage} onClick={toggle} />
              <Modal isOpen={modal} toggle={toggle} >
                  <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                  </ModalFooter>
              </Modal>
              </div>
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                
                  <p>{projects.category}</p>
                </div>
                
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </div>
          </div>
          
          

          
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Certifications.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
