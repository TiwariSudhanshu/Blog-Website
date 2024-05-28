import "./write.css"

function Write() {
  return (
    <div className="write">
      <img className="writeImg" alt="write-img" 
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i class = "fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" id="writeInput" placeholder="Title" autoFocus = {true}/>
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write
