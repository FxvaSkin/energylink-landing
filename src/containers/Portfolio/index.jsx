import React from 'react'
import cx from 'classnames'
import styles from './portfolio.module.css'
import { Section } from 'components/Section'
import { Header } from 'components/Header'
import { Card } from 'components/Card'

import {
  clear2,
  communic,
  deltaUni,
  lad,
  siemensPanel,
  conveyor,
  nss2,
} from 'images/projects'

const projects = [
  {
    key: 'project1',
    title: 'Магазин «Леруа Мерлен»',
    description: `Система управления АВР в системе энергоснабжения магазина «Леруа Мерлен». АВР построен на базе ПЛК Modicon M221 (Schneider Electric). АВР осуществляет управление двумя вводами городской сети, UPS и вводом ДГУ. Системы управления приточными и приточно-вытяжными ВУ на базе контролеров Modicon M221.`,
  },
  {
    key: 'project2',
    title: 'Станция повышения давления',
    description: `Система управления станцией повышения давления на базе ПЛК S7-300 (Siemens), частотных приводов Delta 2000 и SCADA WinCC. Предназначена для поддержания давления и температуры на насосной станции тепловых сетей. Осуществляет управление десятью насосами с частотно-регулируемым приводом, запорной арматурой и регулирующими задвижками.`,
    image: nss2,
    alt: `Станция повышения давления на базе Siemens S7-300`,
  },
  {
    key: 'project3',
    title: 'Электрические подстанции',
    description: `SCADA система мониторинга состояния электрических подстанций. Выполнена на базе программного обеспечения CliarSCADA и микропроцессорных устройств защиты SEPAM (Schneider Electric) и сети Modbus.`,
    image: clear2,
    alt: `CliarSCADA и Schneider Electric SEPAM`,
  },
  {
    key: 'project4',
    title: 'Котельная установка',
    description: `Система управления общекотельным оборудованием (сетевые и подпиточные насосы, насосы сырой воды, запорно-регулирующая арматура). Построена на базе двух ПЛК S7-1200 (CPU 1215 и CPU1212) и панели оператора KTP1000 Basic (Siemens). Частотно-регулируемый привод выполнен на базе преобразователей частоты Delta Electronics.`,
    image: siemensPanel,
    alt: `ПЛК Siemens S7-1200 (CPU 1215 и CPU1212)`,
  },
  {
    key: 'project5',
    title: 'Конвейер',
    description: `Система управления конвейерной линией транспортировки продукции для комплекса радиационной стерилизации. Транспортная система представляет собой кольцевой конвейер, состоящий из сорока независимых секций с электроприводом с частотным регулированием. Система управления транспортировкой выполнена на базе ПЛК Modicon M241, панели оператора Magelis HMISTU855. Частотно-регулируемый привод выполнен на сорока преобразователях частоты Altivar 32, управляемых контроллером по полевой шине Modbus (RS-485). Автоматизированное рабочее место оператора выполнено на базе ПО Vijeo Citect (все оборудование и SCADA – производства Schneider Elecric).`,
    image: conveyor,
    alt: `Управления конвейерной линией`,
  },
  {
    key: 'project6',
    title: 'Насосная станция',
    description: `Универсальная система управления насосной станцией повышения давления. Система построена на базе панели оператора Delta TP-04P со встроенным ПЛК. Система рассчитана на управление станциями, включающими от 1 до 4 насосов. Оперативные настройки - количество насосов, тип датчика давления, тип приводов для каждого насоса (прямой или частотно-регулируемый), параметры шины Modbus (RS-485) и другие – настраиваются непосредственно с панели оператора.`,
    image: deltaUni,
    alt: `Управление насосной станцией`,
  },
  {
    key: 'project7',
    title: 'Гостиничный комплекс',
    description: `Системы управления приточными и приточно-вытяжными ВУ на базе контролеров Modicon M271 и преобразователей частоты Altivar 212 (Schneider Electric), гостиничный комплекс.`,
  },
  {
    key: 'project8',
    title: 'Учреждение',
    description: `Система мониторинга энергетических установок и климатических параметров в служебных помещениях учреждения. Применен контроллер Scadapack 330 и SCADA система ClearSCADA (Schneider Electric).`,
    image: communic,
    alt: `Schneider Electric Scadapack 330 и SCADA ClearSCADA`,
  },
  {
    key: 'project9',
    title: 'Типография',
    description: `Восстановление работоспособности многофункциональной линии печати «Seri Roll». Произведена замена вышедших из строя устаревших контроллеров GE Fanuc на контроллеры Delta DVP, произведено конвертирование технологического программного обеспечения, выполнены пуско-наладочные работы.`,
  },
]

const Portfolio = () => (
  <Section id="portfolio" className={styles.section}>
    <Header as="h2">Проекты</Header>
    <div className={cx(styles.container)}>
      {projects?.map(project => (
        <Card key={project.key} image={project.image} alt={project.alt}>
          <Header as="h3">{project.title}</Header>
          <p>{project.description}</p>
        </Card>
      ))}
    </div>
  </Section>
)

export { Portfolio }
