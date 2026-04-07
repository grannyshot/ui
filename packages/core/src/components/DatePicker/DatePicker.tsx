import React, { forwardRef } from 'react'
import { DatePicker as ArkDatePicker } from '@ark-ui/react/date-picker'
import { Portal } from '@ark-ui/react/portal'
import {
  datePickerControl,
  datePickerInput,
  datePickerTrigger,
  datePickerContent,
  datePickerViewControl,
  datePickerViewTrigger,
  datePickerPrevTrigger,
  datePickerNextTrigger,
  datePickerTable,
  datePickerTableHeader,
  datePickerTableCellTrigger,
} from './datepicker.recipe'

type DatePickerProps = Omit<ArkDatePicker.RootProps, 'className'> & {
  className?: string
}

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ className, ...rootProps }, ref) => {
    return (
      <ArkDatePicker.Root ref={ref} lazyMount unmountOnExit {...rootProps} className={className}>
        <ArkDatePicker.Control className={datePickerControl}>
          <ArkDatePicker.Input className={datePickerInput} />
          <ArkDatePicker.Trigger className={datePickerTrigger}>
            <svg aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </ArkDatePicker.Trigger>
        </ArkDatePicker.Control>
        <Portal>
          <ArkDatePicker.Positioner>
            <ArkDatePicker.Content className={datePickerContent}>
              <ArkDatePicker.View view="day">
                <ArkDatePicker.Context>
                  {(api) => (
                    <>
                      <ArkDatePicker.ViewControl className={datePickerViewControl}>
                        <ArkDatePicker.PrevTrigger className={datePickerPrevTrigger}>
                          <svg aria-hidden="true"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </ArkDatePicker.PrevTrigger>
                        <ArkDatePicker.ViewTrigger className={datePickerViewTrigger}>
                          <ArkDatePicker.RangeText />
                        </ArkDatePicker.ViewTrigger>
                        <ArkDatePicker.NextTrigger className={datePickerNextTrigger}>
                          <svg aria-hidden="true"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </ArkDatePicker.NextTrigger>
                      </ArkDatePicker.ViewControl>
                      <ArkDatePicker.Table className={datePickerTable}>
                        <ArkDatePicker.TableHead>
                          <ArkDatePicker.TableRow>
                            {api.weekDays.map((weekDay, i) => (
                              <ArkDatePicker.TableHeader
                                key={i}
                                className={datePickerTableHeader}
                              >
                                {weekDay.narrow}
                              </ArkDatePicker.TableHeader>
                            ))}
                          </ArkDatePicker.TableRow>
                        </ArkDatePicker.TableHead>
                        <ArkDatePicker.TableBody>
                          {api.weeks.map((week, i) => (
                            <ArkDatePicker.TableRow key={i}>
                              {week.map((day, j) => (
                                <ArkDatePicker.TableCell key={j} value={day}>
                                  <ArkDatePicker.TableCellTrigger
                                    className={datePickerTableCellTrigger}
                                  >
                                    {day.day}
                                  </ArkDatePicker.TableCellTrigger>
                                </ArkDatePicker.TableCell>
                              ))}
                            </ArkDatePicker.TableRow>
                          ))}
                        </ArkDatePicker.TableBody>
                      </ArkDatePicker.Table>
                    </>
                  )}
                </ArkDatePicker.Context>
              </ArkDatePicker.View>

              <ArkDatePicker.View view="month">
                <ArkDatePicker.Context>
                  {(api) => (
                    <>
                      <ArkDatePicker.ViewControl className={datePickerViewControl}>
                        <ArkDatePicker.PrevTrigger className={datePickerPrevTrigger}>
                          <svg aria-hidden="true"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </ArkDatePicker.PrevTrigger>
                        <ArkDatePicker.ViewTrigger className={datePickerViewTrigger}>
                          <ArkDatePicker.RangeText />
                        </ArkDatePicker.ViewTrigger>
                        <ArkDatePicker.NextTrigger className={datePickerNextTrigger}>
                          <svg aria-hidden="true"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </ArkDatePicker.NextTrigger>
                      </ArkDatePicker.ViewControl>
                      <ArkDatePicker.Table className={datePickerTable}>
                        <ArkDatePicker.TableBody>
                          {api.getMonthsGrid({ columns: 4, format: 'short' }).map((months, i) => (
                            <ArkDatePicker.TableRow key={i}>
                              {months.map((month, j) => (
                                <ArkDatePicker.TableCell key={j} value={month.value}>
                                  <ArkDatePicker.TableCellTrigger
                                    className={datePickerTableCellTrigger}
                                  >
                                    {month.label}
                                  </ArkDatePicker.TableCellTrigger>
                                </ArkDatePicker.TableCell>
                              ))}
                            </ArkDatePicker.TableRow>
                          ))}
                        </ArkDatePicker.TableBody>
                      </ArkDatePicker.Table>
                    </>
                  )}
                </ArkDatePicker.Context>
              </ArkDatePicker.View>

              <ArkDatePicker.View view="year">
                <ArkDatePicker.Context>
                  {(api) => (
                    <>
                      <ArkDatePicker.ViewControl className={datePickerViewControl}>
                        <ArkDatePicker.PrevTrigger className={datePickerPrevTrigger}>
                          <svg aria-hidden="true"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </ArkDatePicker.PrevTrigger>
                        <ArkDatePicker.ViewTrigger className={datePickerViewTrigger}>
                          <ArkDatePicker.RangeText />
                        </ArkDatePicker.ViewTrigger>
                        <ArkDatePicker.NextTrigger className={datePickerNextTrigger}>
                          <svg aria-hidden="true"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </ArkDatePicker.NextTrigger>
                      </ArkDatePicker.ViewControl>
                      <ArkDatePicker.Table className={datePickerTable}>
                        <ArkDatePicker.TableBody>
                          {api.getYearsGrid({ columns: 4 }).map((years, i) => (
                            <ArkDatePicker.TableRow key={i}>
                              {years.map((year, j) => (
                                <ArkDatePicker.TableCell key={j} value={year.value}>
                                  <ArkDatePicker.TableCellTrigger
                                    className={datePickerTableCellTrigger}
                                  >
                                    {year.label}
                                  </ArkDatePicker.TableCellTrigger>
                                </ArkDatePicker.TableCell>
                              ))}
                            </ArkDatePicker.TableRow>
                          ))}
                        </ArkDatePicker.TableBody>
                      </ArkDatePicker.Table>
                    </>
                  )}
                </ArkDatePicker.Context>
              </ArkDatePicker.View>
            </ArkDatePicker.Content>
          </ArkDatePicker.Positioner>
        </Portal>
      </ArkDatePicker.Root>
    )
  }
)

DatePicker.displayName = 'DatePicker'
