import React from 'react';
import { Container, Input, FormControl } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const Order = () => {
  const [dataOrder, setDataOrder] = useState(null);
  const { id: orderId } = useParams();
  useEffect(() => {
    const getOrderById = async () => {
      try {
        const docRef = doc(db, 'orders', orderId);
        const docSnap = await getDoc(docRef);
        setDataOrder(docSnap.data());
      } catch (error) {
        console.log(error);
      }
    };
    getOrderById();
  }, []);
  console.log();
  return (
    <>
      <Container minW="container.lg">
        <FormControl>
          {console.log(dataOrder)}
          <Input />
        </FormControl>
      </Container>
    </>
  );
};
