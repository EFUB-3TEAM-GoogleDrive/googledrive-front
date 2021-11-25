import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ico_document from '../ico/ico_document.svg';
import ico_survey from '../ico/ico_survey.svg';
import ico_presentation from '../ico/ico_presentation.svg';
import ico_sheet from '../ico/ico_sheet.svg';
import ico_drawing from '../ico/ico_drawing.png';
import ico_map from '../ico/ico_map.png';
import ico_plus from '../ico/ico_plus.png';
import ico_site from '../ico/ico_site.png';
import ico_folder_new from '../ico/ico_folder_new.png';
import ico_file_upload from '../ico/ico_file_upload.png';
import ico_folder_upload from '../ico/ico_folder_upload.png';
import ico_diagram from '../ico/ico_diagram.png';
import ico_app_script from '../ico/ico_app_script.png';
import ico_jamboard from '../ico/ico_jamboard.png';
import ico_arrow_right_g from '../ico/ico_arrow_right_g.svg';

const Menu = styled.div`
	width: 380px;
	position: absolute;
	top: ${(props) => props.y}px;
	left: ${(props) =>
		window.innerWidth - props.x <= 380 ? props.x - 380 : props.x}px;

	font-size: 17px;
`;

const Icon = styled.img`
	cursor: pointer;
	margin-right: 22px;
	width: 18px;
	height: 18px;
`;
const IconArrow = styled.img`
	transition: 300ms;
	margin-left: 17px;
	padding: 8px;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	:hover {
		background-color: #ccc;
	}
`;

const OptionList = styled.ul`
	margin: 0px;
	padding: 20px 0px;
	list-style: none;
	border-radius: 7px;
	box-shadow: 1px 1px 20px -10px #000;
	background-color: #ffffff;
`;
const OptionItem = styled.li`
	cursor: pointer;
	padding: 8px 40px 8px 35px;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;

	:hover {
		background-color: #f1f1f1;
	}
`;
const SubOptionList = styled.ul`
	width: 380px;
	position: absolute;
	top: 0px;
	right: -380px;
	margin: 0px;
	padding: 20px 0px;
	list-style: none;
	border-radius: 7px;
	box-shadow: 1px 1px 20px -10px #000;
	background-color: #ffffff;
`;
const Line = styled.div`
	position: absolute;
	bottom: -10px;
	left: 0px;
	width: 100%;
	border-bottom: 1px solid #cccccc;
`;
const borderLeft = {
	borderLeft: '1px solid #cccccc',
};

const optionMain = [
	{ id: 1, title: '새 폴더', img: ico_folder_new, link: '', slice_h: true },
	{ id: 2, title: '파일 업로드', img: ico_file_upload, link: '' },
	{
		id: 3,
		title: '폴더 업로드',
		img: ico_folder_upload,
		link: '',
		slice_h: true,
	},
	{
		id: 4,
		title: 'Google 문서',
		img: ico_document,
		link: '',
		slice_v: true,
		subId: 1,
	},
	{
		id: 5,
		title: 'Google 스프레드시트',
		img: ico_sheet,
		link: '',
		subId: 2,
		slice_v: true,
	},
	{
		id: 6,
		title: 'Google 프레젠테이션',
		img: ico_presentation,
		link: '',
		slice_v: true,
		subId: 3,
	},
	{
		id: 7,
		title: 'Google 설문지',
		img: ico_survey,
		link: '',
		slice_v: true,
		subId: 4,
	},
	{ id: 8, title: '더보기', link: '', subId: 5 },
];
const optionSub = {
	1: [
		{ id: 1, title: '빈 문서', link: '' },
		{ id: 2, title: '템플릿', link: '' },
	],
	2: [
		{ id: 1, title: '빈 스프레드시트', link: '' },
		{ id: 2, title: '템플릿', link: '' },
	],
	3: [
		{ id: 1, title: '빈 프레젠테이션', link: '' },
		{ id: 2, title: '템플릿', link: '' },
	],
	4: [
		{ id: 1, title: '빈 양식', link: '' },
		{ id: 2, title: '빈 퀴즈', link: '' },
		{ id: 3, title: '템플릿', link: '' },
	],
	5: [
		{ id: 1, title: 'Google 드로잉', img: ico_drawing, link: '' },
		{ id: 2, title: 'Google 내 지도', img: ico_map, link: '' },
		{ id: 3, title: 'Google 사이트 도구', img: ico_site, link: '' },
		{ id: 4, title: 'diagrams.net', img: ico_diagram, link: '' },
		{ id: 5, title: 'Google Apps Script', img: ico_app_script, link: '' },
		{
			id: 6,
			title: 'Google Jamboard',
			img: ico_jamboard,
			link: '',
			slice_h: true,
		},
		{ id: 7, title: '연결할 앱 더보기', img: ico_plus, link: '' },
	],
};

const BlankRightClick = ({ x, y }) => {
	const [mainId, setMainId] = useState(-1);
	const [subId, setSubId] = useState(-1);
	const boundary = window.innerWidth - x <= 680;
	useEffect(() => {
		setMainId(-1);
		setSubId(-1);
	}, [x, y]);

	const onClickMain = (_mainId, _subId = -1) => {
		setMainId(_mainId);
		setSubId(_subId);
	};
	const delayAppear = (_mainId, _subId) =>
		setTimeout(() => {
			setMainId(_mainId);
			setSubId(_subId);
		}, 600);

	const onMouseOverArrow = (_mainId, _subId) => {
		delayAppear(_mainId, _subId);
	};
	return (
		<Menu x={x} y={y}>
			<OptionList>
				{optionMain.map((main, midx) => (
					// <li> main items

					<OptionItem
						style={main.slice_h ? { marginBottom: '20px' } : null}
						key={midx}
						onClick={() => onClickMain(main.id, main.subId)}>
						{/* main items left contents */}

						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Icon
								alt=''
								style={main.img ? null : { opacity: 0 }}
								src={main.img}
							/>
							{main.title}
						</div>

						{main.slice_h && <Line></Line>}
						{/* main items right contents */}

						{main.subId && (
							<div style={main.slice_v ? borderLeft : null}>
								<IconArrow
									alt='arrow'
									src={ico_arrow_right_g}
									onMouseOver={() => onMouseOverArrow(main.id, main.subId)}
								/>
							</div>
						)}
						{main.id === mainId && main.subId && main.subId === subId && (
							// <li> sub items

							<SubOptionList style={boundary ? { left: '-380px' } : null}>
								{optionSub[main.subId].map((sub, sidx) => (
									<OptionItem
										key={sidx}
										style={
											sub.slice_h
												? { display: 'block', marginBottom: '20px' }
												: { display: 'block' }
										}>
										<Icon
											alt=''
											style={sub.img ? null : { display: 'none' }}
											src={sub.img}
										/>
										{sub.title}
										{sub.slice_h && <Line></Line>}
									</OptionItem>
								))}
							</SubOptionList>

							// </li> sub items
						)}
					</OptionItem>
					//  </li> main items
				))}
			</OptionList>
		</Menu>
	);
};

export default BlankRightClick;
