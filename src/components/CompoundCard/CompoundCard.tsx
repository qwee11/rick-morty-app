import React, { memo } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const Title = ({ title, dottedText }: { title: string; dottedText?: boolean }) => {
  return (
    <div className={`compound-card__title`}>
      <p className={`${dottedText ? 'dotted-text' : ''}`}>{title}</p>
    </div>
  );
};

const SubTitle = ({ title, dottedText }: { title: string; dottedText?: boolean }) => {
  return (
    <div className={`compound-card__subtle-title`}>
      <p className={`${dottedText ? 'dotted-text' : ''} text-thin`}>{title}</p>
    </div>
  );
};

const Image = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="compound-card__img">
      <img alt="image" src={imageUrl}></img>
    </div>
  );
};

const Card = ({ children, linkTo, bigPadding, contained }: { children: React.ReactNode; linkTo: string; bigPadding?: boolean; contained?: boolean }) => {
  return (
    <NavLink to={linkTo}>
      <div className={`compound-card ${bigPadding ? 'big-padding' : ''} ${contained ? 'contained' : ''}`}>
        {children}
      </div>
    </NavLink>
  );
};


Card.Title = Title;
Card.SubTitle = SubTitle;
Card.Image = Image;

const MemoizedCard = memo(Card);

const CompoundCard = Object.assign(MemoizedCard, {
  Title: Card.Title,
  SubTitle: Card.SubTitle,
  Image: Card.Image,
});

export default CompoundCard;
