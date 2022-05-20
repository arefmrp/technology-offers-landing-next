import React from 'react';

const showOpenAccordion = () => {
    let items = document.querySelectorAll(".accordion-cs");
    for (let i = 0; i<items.length;i++){
        items[i].addEventListener('click',()=>{
            items[i].querySelector('.card-link i').classList.toggle('active')
        })
    }
}

const AccordionItem = (props) => {
    return (
        <div id="accordion" className="accordion-cs"  onLoad={()=>showOpenAccordion} >

            <div className="card shadow-lg">
                <div className="card-header">
                    <a className="card-link" data-toggle="collapse" href={`#collapse${props.id}`}>
                        <span>{props.title}</span>
                        <i className="fa fa-chevron-down"></i>
                    </a>

                </div>
                <div id={`collapse${props.id}`} className="collapse " data-parent="#accordion">
                    <div className="card-body">
                        <p>

                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;