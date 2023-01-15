wp.blocks.registerBlockType('ideapro/custom-block',{
    title: 'company contact information',
    icon: 'hammer',
    category: 'design',
    attributes: {
        companyName:  {type: 'string'},
        companyPhone:  {type: 'string'},
        companyaddress:  {type: 'string'},
    
    },
    edit: function(props){
    
    
    React.createElement("div", null,
    /*#__pure__*/React.createElement("label", null,"company name"),
    /*#__pure__*/React.createElement("input", {
    
        type : "text",
         value: "",
         placeholder: "company name"
         
         }),
         /*#__pure__*/React.createElement("label", null,"company phone"),
        /*#__pure__*/React.createElement("input", {
    
        type : "text",
        value: "",
        placeholder: "company phone"
        
        }),
        /*#__pure__*/React.createElement("label", null,"company address"),
        /*#__pure__*/React.createElement("input", {
    
        type : "text",
         value: "",
         placeholder: "company address"
         
         }));
        },
        save: function(props){
        return null;
    }
    
    })