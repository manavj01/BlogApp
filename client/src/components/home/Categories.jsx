
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  create:
  {
    margin: "20px !important",
    background: '#6495ED !important',
    color: '#fff !important',
    width: '86% !important'
  },
  table:
  {
    border: '1px solid rgba(224, 224, 224, 1) !important '
  },
  link:
  {
    textDecoration: 'none',
    color: 'inherit'
  }


})


const Categories = () => {

  const classes = useStyles();

  return (
    <>
      <Link to='/create' className={classes.link} > <Button variant="contained" className={classes.create}>Create Blog</Button> </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to={'/'} className={classes.link}>
                All Categories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            categories.map((category) => (
              <TableRow key={category}>
                <TableCell>
                  <Link
                    to={`/?category=${category}`}
                    className={classes.link}
                  >
                    {category}
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

    </>
  )

}

export default Categories;