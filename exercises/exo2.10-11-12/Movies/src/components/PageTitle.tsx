interface PageTitleProps {
  title : string;
}
const PageTitle = (props:PageTitleProps)=>{
  return <p>{props.title}</p>
}

export default PageTitle;