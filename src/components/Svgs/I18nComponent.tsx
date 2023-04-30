import React, { SVGProps } from 'react'

import { LANGUAGE } from '@/src/i18n'

interface I18nProps<T> extends SVGProps<T> {
  language?: LANGUAGE
}

const SvgComponent = (props: I18nProps<SVGSVGElement>) => {
  return (
    <div>
      {props.language === 'en_US' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          className="icon"
          viewBox="0 0 1024 1024"
          {...props}
        >
          <path
            fill={props.fill || '#999'}
            d="M787.157 886.272v-91.52h-57.514v15.488h-43.648V653.397h101.162v-51.2h46.08v51.2h103.424v155.435h-45.909v-14.08h-57.515v91.52zm46.08-134.187h57.515v-55.978h-57.515zm-103.594 0h57.514v-55.978h-57.514zm-435.84 123.35a31.787 31.787 0 0 1-18.091-28.672V760.66H133.205a45.653 45.653 0 0 1-45.653-45.568V183.51a45.739 45.739 0 0 1 45.653-45.653h753.067a45.653 45.653 0 0 1 45.568 45.653v354.134h-64V201.728l-716.33.256v494.592h156.33a32.17 32.17 0 0 1 32.085 32.085v52.736l100.182-77.909a31.659 31.659 0 0 1 19.754-6.912h128v64H470.7L327.595 872.064a34.133 34.133 0 0 1-19.755 6.656 32.384 32.384 0 0 1-14.123-3.285zm279.936-282.24-18.262-73.003h-93.866l-18.262 73.003h-77.653l98.432-317.398h91.52l98.432 317.398zM482.73 434.347l-6.656 26.922h64.896l-6.912-26.922c-8.534-31.574-16.854-69.334-25.174-101.846h-1.749c-7.765 33.28-16.341 70.272-24.49 101.846z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          className="icon"
          viewBox="0 0 1024 1024"
          {...props}
        >
          <path
            fill={props.fill || '#999'}
            d="M296.15 879.317a32.128 32.128 0 0 1-18.091-28.842v-86.102H135.296a45.696 45.696 0 0 1-45.397-45.653V187.136a45.61 45.61 0 0 1 45.397-45.568h753.067a45.824 45.824 0 0 1 45.824 45.568v354.133h-64v-336l-716.331.256v494.592h156.33a31.83 31.83 0 0 1 31.83 32.086v52.736l100.437-77.91a31.744 31.744 0 0 1 19.499-6.656h128v64H473.045L329.728 875.605a32 32 0 0 1-19.499 6.912 33.792 33.792 0 0 1-14.08-3.2zm540.16-28.842-14.593-58.496H746.54l-14.848 58.496h-61.91l78.678-254.08h73.258l78.763 254.08zM763.562 723.37l-5.419 21.333h52.01l-5.674-21.333c-6.656-25.174-13.099-55.766-20.01-81.579h-1.409c-6.357 26.624-13.098 56.448-19.498 81.621zm-282.667-89.984V515.712h-73.77v20.01H350.89v-201.6h130.005v-65.834h59.179v65.835H672.81v199.85h-58.752v-18.261h-73.984v117.675zm59.179-172.416h73.984V389.12h-73.984zm-132.907 0h73.77V389.12h-73.77z"
          />
        </svg>
      )}
    </div>
  )
}
export default SvgComponent
