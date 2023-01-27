import { ContentItem, convertContentItems } from"../../common/ContentItem";
import { Link } from 'react-router-dom'
import styles from './Chariteach.module.css'
import Header from "pages/Header";
import { useFetchData } from "common/hooks/useFetchData";
import { CircularProgress } from "@chakra-ui/progress";
import { Routes } from 'constants/routes'

const Chariteach = () => {
  const [isLoading, content] = useFetchData(Routes.backendRoot + "/chariteach")

  return (
    <>
      <div className={styles.Chariteach}>
        <Header />
        <div className={styles.TitleBar}>
          <div className={styles.NavLinks}>
            <Link to="/">HOME</Link>
            <p>/</p>
            <Link to="/events">EVENTS</Link>
            <p>/</p>
            <Link to="/events/chariteach">CHARITEACH</Link>
          </div>
          <h1>CharITeach</h1>
        </div>
        <div className={styles.Content}>
          {isLoading ? 
            <CircularProgress isIndeterminate color='blue.300' style={{display: "flex", justifyContent: "center"}}/> 
            :
            convertContentItems(content as ContentItem[])
          }
        </div>
      </div>
    </>
  )
}

export default Chariteach
