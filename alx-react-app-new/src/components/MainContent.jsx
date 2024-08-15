function MainContent() {
    return (
    <main style={{

        backgroundColor: '#ffffff',  
        padding: '30px',            
        borderRadius: '15px',       
        margin: '30px auto',         
        maxWidth: '800px',          
        fontFamily: 'Arial, sans-serif',  
        fontSize: '18px',            
        color: '#333',               
        lineHeight: '1.6',           
        border: '2px solid #e0e0e0', 
        
        }}>
        <p>I <span style={{color:'pink'}}>love</span> to visit <span style={{color:'blue'}}>New York</span>, Paris, and Tokyo.</p>
    </main>
   );
}

export default MainContent;