import React from 'react';

import Category from '../components/Category';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../components/Pagination';

const Home = ({ searchValue }) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [сategoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sort, setSort] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = сategoryId > 0 ? `category=${сategoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    fetch(
      `https://63dcbc1bdf83d549ce92a5eb.mockapi.io/pizzas?page=${currentPage}&limit=4&${search}${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((response) => response.json())
      .then((array) => {
        setPizzas(array);
        setIsLoading(false);
      });
    window.scrollTo(0, 60);
  }, [сategoryId, sort, searchValue, currentPage]);

  const itemsPizza = pizzas.map((item) => <PizzaBlock key={item.id} {...item} />);
  const skeletons = [...Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Category value={сategoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sort} onChangeSort={(i) => setSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : itemsPizza}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
