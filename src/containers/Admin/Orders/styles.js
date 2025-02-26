import styled from 'styled-components';
import Select from 'react-select';

export const ProductImage = styled.img`
  height: 90px;
  padding: 12px;
  border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
  width: 240px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin: 28px 0;
  gap: 50px;
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => props.theme.darkGray};
  font-size: 18px;
  line-height: 20px;
  padding-bottom: 5px;
`;

