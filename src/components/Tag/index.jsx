import '../../style/Tag.css'



function Tag(props) {
    const tag = props.tagname

    return (
        <div className='tag-container'>{tag}</div>
    )

}


export default Tag