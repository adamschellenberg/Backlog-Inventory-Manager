import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseSystem, chooseGenre, chooseBeaten } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import Button from 'react-bootstrap/Button';
import { server_calls } from '../../api';

interface GameFormProps {
    id?: string;
    data?: {}
};

interface GameState {
    title: string,
    system: string,
    genre: string,
    beaten: boolean
};

export const GameForm = (props:GameFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const title = useSelector<GameState>(state => state.title);
    const {register, handleSubmit} = useForm( {});

    const onSubmit = (data:any, event:any) => {
        // console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            // console.log(`Updated: ${data} ${props.id}`);
            // console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseTitle(data.title));
            dispatch(chooseSystem(data.system));
            dispatch(chooseGenre(data.genre));
            dispatch(chooseBeaten(data.beaten));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Game Title</label>
                <Input {...register('title')} name='title' placeholder='Title' />
            </div>
            <div>
                <label htmlFor="system">System</label>
                <Input {...register('system')} name='system' placeholder='System' />
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <Input {...register('genre')} name='genre' placeholder='genre' />
            </div>
            <div>
                <label htmlFor="beaten">Beaten?</label>
                <input {...register('beaten')} name='beaten' placeholder='Beaten' type="checkbox" />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    </div>
  )
}
