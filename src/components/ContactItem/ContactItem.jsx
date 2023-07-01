import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsOperations';
import { Item, Text, Button, BtnWrapper } from './ContactItem.styled';
import { AiOutlinePhone } from 'react-icons/ai';

const ContactItem = props => {
  const { id, name, number, setModalData, toggleModal } = props;

  const dispatch = useDispatch();

  return (
    <Item>
      <Text>
        <AiOutlinePhone size={16} /> {name}: {number}
      </Text>
      <BtnWrapper>
        <Button
          type="button"
          onClick={() => {
            toggleModal();
            setModalData({ id, name, number });
          }}
        >
          Edit
        </Button>
        <Button
          type="button"
          onClick={() => {
            dispatch(removeContact(id));
          }}
        >
          Delete
        </Button>
      </BtnWrapper>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setModalData: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ContactItem;
