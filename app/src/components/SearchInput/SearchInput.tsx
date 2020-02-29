import {FlexProps, SpaceProps} from 'styled-system';
import React, {useCallback, useMemo} from 'react';
import Box from '../../ui/components/Box/Box';
import {InputBox, Input, Icon} from './styled';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import _debounce from 'lodash/debounce';
import _stubTrue from 'lodash/stubTrue';

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FlexProps &
  SpaceProps & {
    onInputStop?(value: string): void;
  };

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onInputStop = _stubTrue,
  ...rest
}) => {
  const debouncedInputStop = useCallback(_debounce(onInputStop, 700), [
    onInputStop,
  ]);
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const {value} = evt.target;
    if (onChange) onChange(evt);
    debouncedInputStop(value);
  }
  return (
    <InputBox {...rest}>
      <Input
        value={value}
        onChange={handleChange}
        paddingRight={5}
        paddingLeft={2}
      />
      <Icon icon={faSearch} padding={2} />
    </InputBox>
  );
};

export default SearchInput;
